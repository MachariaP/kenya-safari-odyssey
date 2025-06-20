// src/App.js
import React, { useState, useEffect, useMemo } from 'react';
import { collection, addDoc, query, where, onSnapshot, Timestamp } from 'firebase/firestore';
import { db, auth, initializeAuth } from './firebase';

// Components (defined here to keep in one file as per requirement)
function Header({ userId }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">LuxeNails Studio</h1>
        <div className="bg-pink-100 px-3 py-1 rounded-full text-sm font-mono">
          User: {userId || 'unknown'}
        </div>
      </div>
    </header>
  );
}

function ServiceSelection({ services, onSelect }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-pink-800">Select a Service</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div 
            key={service.id}
            className="card"
            onClick={() => onSelect(service)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-lg">{service.name}</h4>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  ${service.price}
                </span>
              </div>
              <p className="text-gray-600 mt-2 mb-4">{service.description}</p>
              <div className="text-sm text-pink-600">
                Duration: {service.duration} min
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DateSelection({ onSelect }) {
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-center text-pink-800">
        Select a Date
      </h3>
      <div className="card">
        <div className="p-6">
          <label className="block mb-4 text-pink-700 font-medium">
            Choose your appointment date:
          </label>
          <input
            type="date"
            min={minDate}
            max={maxDateString}
            onChange={(e) => onSelect(e.target.valueAsDate)}
            className="w-full px-4 py-3"
          />
          <div className="mt-6 flex justify-center">
            <div className="bg-pink-100 border-2 border-dashed border-pink-300 rounded-xl p-4 text-center">
              <div className="text-pink-600 mb-2">Available 7 days a week</div>
              <div className="text-sm text-pink-800">9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeSelection({ timeSlots, selectedDate, onSelect }) {
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-center text-pink-800">
        Select Time for {formattedDate}
      </h3>
      {timeSlots.length === 0 ? (
        <div className="card p-8 text-center">
          <div className="text-pink-600 text-lg mb-4">
            No available time slots for this date
          </div>
          <button 
            onClick={() => onSelect(null)}
            className="btn-primary"
          >
            Choose Another Date
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {timeSlots.map(slot => (
            <button
              key={slot.value}
              disabled={slot.isBooked}
              onClick={() => onSelect(slot.value)}
              className={`time-slot ${slot.isBooked ? 'time-slot-booked' : 'time-slot-available'}`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function BookingForm({ service, date, time, bookingData, onChange, onSubmit, loading, error }) {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...bookingData,
      [name]: value
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <div className="p-6 border-b border-pink-100">
          <h3 className="text-xl font-semibold text-pink-800 mb-2">
            Confirm Your Booking
          </h3>
          <div className="flex flex-wrap gap-4 text-pink-700">
            <div><span className="font-medium">Service:</span> {service.name}</div>
            <div><span className="font-medium">Date:</span> {formattedDate}</div>
            <div><span className="font-medium">Time:</span> {time}</div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
              Failed to book appointment. Please try again.
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-pink-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3"
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-pink-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-pink-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={() => onChange({ name: '', email: '', phone: '' })}
              className="btn-secondary"
            >
              Back to Time Selection
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary ${loading ? 'bg-pink-400 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Booking...' : 'Confirm Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SuccessScreen({ onBack }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="card p-8">
        <div className="success-icon">✓</div>
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Appointment Confirmed!
        </h2>
        <p className="text-gray-600 mb-8">
          Thank you for your booking. We've sent a confirmation to your email.
          We look forward to seeing you!
        </p>
        <button
          onClick={onBack}
          className="btn-primary"
        >
          Book Another Service
        </button>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize authentication
  useEffect(() => {
    setLoading(true);
    initializeAuth()
      .then(user => {
        setUser(user);
        setLoading(false);
      })
      .catch(err => {
        setError('Authentication failed');
        setLoading(false);
        console.error(err);
      });
  }, []);

  // Fetch services
  useEffect(() => {
    if (!user) return;
    const servicesRef = collection(db, 'services');
    const unsubscribe = onSnapshot(servicesRef, (snapshot) => {
      const servicesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setServices(servicesData);
      setLoading(false);
    }, err => {
      setError('Failed to load services');
      setLoading(false);
      console.error(err);
    });
    return unsubscribe;
  }, [user]);

  // Fetch bookings for selected date
  useEffect(() => {
    if (!user || !selectedDate) return;
    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(23, 59, 59, 999);
    const bookingsRef = collection(db, 'bookings');
    const q = query(
      bookingsRef,
      where('date', '>=', Timestamp.fromDate(startOfDay)),
      where('date', '<=', Timestamp.fromDate(endOfDay))
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const bookingsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(bookingsData);
    }, err => {
      setError('Failed to load bookings');
      console.error(err);
    });
    return unsubscribe;
  }, [user, selectedDate]);

  // Generate time slots
  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    const slots = [];
    const currentDate = new Date(selectedDate);
    const BUSINESS_HOURS = { start: 9, end: 18 };
    const TIME_SLOT_DURATION = 30;

    for (let hour = BUSINESS_HOURS.start; hour < BUSINESS_HOURS.end; hour++) {
      for (let minute = 0; minute < 60; minute += TIME_SLOT_DURATION) {
        const slotTime = new Date(currentDate);
        slotTime.setHours(hour, minute, 0, 0);
        if (slotTime > new Date()) {
          const formattedTime = slotTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          });
          const isBooked = bookings.some(booking => {
            const bookingTime = booking.date.toDate();
            return (
              bookingTime.getHours() === hour &&
              bookingTime.getMinutes() === minute
            );
          });
          slots.push({
            time: formattedTime,
            value: `${hour}:${minute.toString().padStart(2, '0')}`,
            timestamp: slotTime,
            isBooked
          });
        }
      }
    }
    return slots;
  }, [selectedDate, bookings]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const bookingTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      bookingTime.setHours(parseInt(hours), parseInt(minutes));
      await addDoc(collection(db, 'bookings'), {
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        date: Timestamp.fromDate(bookingTime),
        customerName: bookingData.name,
        customerEmail: bookingData.email,
        customerPhone: bookingData.phone,
        userId: user.uid,
        createdAt: Timestamp.now()
      });
      setBookingStatus('success');
    } catch (err) {
      setBookingStatus('error');
      console.error('Booking error:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetBookingProcess = () => {
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingData({ name: '', email: '', phone: '' });
    setBookingStatus(null);
  };

  if (loading && !services.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="text-pink-500 text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 text-black">
      <Header userId={user?.uid} />
      <main className="container mx-auto px-4 py-8">
        {bookingStatus === 'success' ? (
          <SuccessScreen onBack={resetBookingProcess} />
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">
              Book Your Perfect Nails
            </h2>
            {!selectedService ? (
              <ServiceSelection services={services} onSelect={setSelectedService} />
            ) : !selectedDate ? (
              <DateSelection onSelect={(date) => { setSelectedDate(date); setSelectedTime(null); }} />
            ) : !selectedTime ? (
              <TimeSelection
                timeSlots={timeSlots}
                selectedDate={selectedDate}
                onSelect={setSelectedTime}
              />
            ) : (
              <BookingForm
                service={selectedService}
                date={selectedDate}
                time={selectedTime}
                bookingData={bookingData}
                onChange={setBookingData}
                onSubmit={handleBookingSubmit}
                loading={loading}
                error={bookingStatus === 'error'}
              />
            )}
          </>
        )}
      </main>
      <footer className="bg-white py-6 mt-12 border-t border-pink-100">
        <div className="container mx-auto px-4 text-center text-pink-600">
          © {new Date().getFullYear()} LuxeNails Studio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
