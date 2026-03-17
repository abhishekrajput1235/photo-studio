// import { useState } from 'react';
// import Hero from '../components/Hero';
// import { Calendar, MapPin, Mail, Phone, User, MessageSquare } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import bookingHeroImage from '../assets/6.jpeg';

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     eventType: '',
//     eventDate: '',
//     location: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       if (!supabase) {
//         throw new Error('Supabase is not configured');
//       }

//       const { error } = await supabase.from('bookings').insert([
//         {
//           name: formData.name,
//           phone: formData.phone,
//           email: formData.email,
//           event_type: formData.eventType,
//           event_date: formData.eventDate,
//           location: formData.location,
//           message: formData.message,
//         },
//       ]);

//       if (error) throw error;

//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         eventType: '',
//         eventDate: '',
//         location: '',
//         message: '',
//       });

//       setTimeout(() => setSubmitStatus('idle'), 5000);
//     } catch (error) {
//       console.error('Error submitting booking:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <Hero
//         title="Book Your Session"
//         subtitle="Let's capture your special moments together"
//         backgroundImage={bookingHeroImage}
//         height="h-96"
//       />

//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Fill out the form below and we'll get back to you within 24 hours to discuss your
//               photography needs and finalize the details.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   <User className="w-4 h-4 inline mr-2" />
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                   <Phone className="w-4 h-4 inline mr-2" />
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                   placeholder="+1 (555) 123-4567"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   <Mail className="w-4 h-4 inline mr-2" />
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
//                   <Calendar className="w-4 h-4 inline mr-2" />
//                   Event Type *
//                 </label>
//                 <select
//                   id="eventType"
//                   name="eventType"
//                   required
//                   value={formData.eventType}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 >
//                   <option value="">Select event type</option>
//                   <option value="wedding">Wedding</option>
//                   <option value="pre-wedding">Pre-Wedding</option>
//                   <option value="birthday">Birthday</option>
//                   <option value="corporate">Corporate Event</option>
//                   <option value="baby">Baby Shoot</option>
//                   <option value="engagement">Engagement</option>
//                   <option value="family">Family Function</option>
//                   <option value="outdoor">Outdoor Photoshoot</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
//                   <Calendar className="w-4 h-4 inline mr-2" />
//                   Event Date *
//                 </label>
//                 <input
//                   type="date"
//                   id="eventDate"
//                   name="eventDate"
//                   required
//                   value={formData.eventDate}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
//                   <MapPin className="w-4 h-4 inline mr-2" />
//                   Event Location *
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   required
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                   placeholder="City, State"
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                 <MessageSquare className="w-4 h-4 inline mr-2" />
//                 Additional Details
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="Tell us more about your event, special requests, or any questions you have..."
//               />
//             </div>

//             {submitStatus === 'success' && (
//               <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
//                 Thank you for your booking request! We'll contact you within 24 hours.
//               </div>
//             )}

//             {submitStatus === 'error' && (
//               <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
//                 Something went wrong. Please try again or contact us directly.
//               </div>
//             )}

//             <div className="mt-8">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
//               </button>
//             </div>

//             <p className="text-sm text-gray-500 text-center mt-4">
//               * Required fields. We respect your privacy and will never share your information.
//             </p>
//           </form>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                 1
//               </div>
//               <h4 className="font-bold text-gray-900 mb-2">We Review</h4>
//               <p className="text-gray-600 text-sm">
//                 We'll review your request and check our availability for your event date.
//               </p>
//             </div>
//             <div>
//               <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                 2
//               </div>
//               <h4 className="font-bold text-gray-900 mb-2">We Connect</h4>
//               <p className="text-gray-600 text-sm">
//                 We'll contact you to discuss details, answer questions, and finalize the package.
//               </p>
//             </div>
//             <div>
//               <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
//                 3
//               </div>
//               <h4 className="font-bold text-gray-900 mb-2">We Capture</h4>
//               <p className="text-gray-600 text-sm">
//                 We'll capture your special moments with professionalism and creativity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Booking;




import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Calendar, MapPin, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';
import bookingHeroImage from '../assets/6.jpeg';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Caveat:wght@400;500&family=Cormorant+Garamond:wght@300;400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      if (!supabase) throw new Error('Supabase is not configured');
      const { error } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          event_type: formData.eventType,
          event_date: formData.eventDate,
          location: formData.location,
          message: formData.message,
        },
      ]);
      if (error) throw error;
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', location: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Shared input style ── */
  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '11px 14px',
    background: '#fffef8',
    border: focused === field ? '1.5px solid #8B6F3E' : '1.5px dashed rgba(139,111,62,0.55)',
    borderRadius: '2px',
    outline: 'none',
    fontFamily: "'Caveat', cursive",
    fontSize: '16px',
    color: '#2c1f0e',
    transition: 'border 0.2s, background 0.2s',
    boxShadow: focused === field ? 'inset 0 1px 6px rgba(139,111,62,0.08)' : 'none',
  });

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '13px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#6b5230',
    marginBottom: '7px',
  };

  /* ── Tape strip colours ── */
  const TAPES = ['rgba(212,168,67,0.5)', 'rgba(165,120,80,0.45)', 'rgba(130,155,95,0.45)', 'rgba(155,125,165,0.45)'];

  return (
    <div style={{ background: '#f5efe4', minHeight: '100vh', fontFamily: "'Georgia', serif" }}>
      <Hero
        title="Book Your Session"
        subtitle="Let's capture your special moments together"
        backgroundImage={bookingHeroImage}
        height="h-96"
      />

      {/* ── FORM SECTION ── */}
      <section style={{ padding: '72px 24px', background: '#f5efe4' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: '14px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8B6F3E', marginBottom: '8px' }}>
              ✦ let's begin ✦
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '38px', fontStyle: 'italic', color: '#2c1f0e', marginBottom: '10px' }}>
              Ready to Get Started?
            </h2>
            {/* Hand-drawn underline */}
            <svg width="180" height="12" viewBox="0 0 180 12" style={{ display: 'block', margin: '0 auto 16px' }}>
              <path d="M4 8 C40 4,80 10,120 6 C148 3,166 9,176 6" stroke="#8B6F3E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55" />
            </svg>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 300, color: '#6b5230', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
              Fill out the form below and we'll get back to you within 24 hours to discuss your photography needs.
            </p>
          </div>

          {/* ── Scrapbook form card ── */}
          <div style={{ position: 'relative', background: '#fffef8', padding: '52px 48px 44px', boxShadow: '0 6px 28px rgba(44,31,14,0.12), 0 2px 6px rgba(0,0,0,0.07)' }}>
            {/* Washi tape strips on top corners */}
            {TAPES.slice(0, 2).map((color, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: i === 0 ? '12%' : '72%',
                  width: '72px',
                  height: '22px',
                  background: color,
                  transform: `rotate(${i === 0 ? '-2deg' : '1.5deg'})`,
                  zIndex: 2,
                }}
              />
            ))}

            {/* Dashed sketch corners */}
            {[
              { top: 10, left: 10, borderTop: true, borderLeft: true },
              { top: 10, right: 10, borderTop: true, borderRight: true },
              { bottom: 10, left: 10, borderBottom: true, borderLeft: true },
              { bottom: 10, right: 10, borderBottom: true, borderRight: true },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '22px',
                  height: '22px',
                  ...(pos.top !== undefined ? { top: pos.top } : { bottom: pos.bottom }),
                  ...(pos.left !== undefined ? { left: pos.left } : { right: pos.right }),
                  borderTop: pos.borderTop ? '1.2px dashed rgba(139,111,62,0.5)' : undefined,
                  borderBottom: pos.borderBottom ? '1.2px dashed rgba(139,111,62,0.5)' : undefined,
                  borderLeft: pos.borderLeft ? '1.2px dashed rgba(139,111,62,0.5)' : undefined,
                  borderRight: pos.borderRight ? '1.2px dashed rgba(139,111,62,0.5)' : undefined,
                }}
              />
            ))}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px 32px' }}>
                {/* Full Name */}
                <div>
                  <label style={labelStyle}>
                    <User size={13} color="#8B6F3E" />
                    Full Name <span style={{ color: '#c0783c' }}>*</span>
                  </label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle('name')}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>
                    <Phone size={13} color="#8B6F3E" />
                    Phone <span style={{ color: '#c0783c' }}>*</span>
                  </label>
                  <input
                    type="tel" id="phone" name="phone" required
                    value={formData.phone} onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={inputStyle('phone')}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>
                    <Mail size={13} color="#8B6F3E" />
                    Email <span style={{ color: '#c0783c' }}>*</span>
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                    style={inputStyle('email')}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label style={labelStyle}>
                    <Calendar size={13} color="#8B6F3E" />
                    Event Type <span style={{ color: '#c0783c' }}>*</span>
                  </label>
                  <select
                    id="eventType" name="eventType" required
                    value={formData.eventType} onChange={handleChange}
                    style={{ ...inputStyle('eventType'), cursor: 'pointer' }}
                    onFocus={() => setFocused('eventType')}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="baby">Baby Shoot</option>
                    <option value="engagement">Engagement</option>
                    <option value="family">Family Function</option>
                    <option value="outdoor">Outdoor Photoshoot</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label style={labelStyle}>
                    <Calendar size={13} color="#8B6F3E" />
                    Event Date <span style={{ color: '#c0783c' }}>*</span>
                  </label>
                  <input
                    type="date" id="eventDate" name="eventDate" required
                    value={formData.eventDate} onChange={handleChange}
                    style={{ ...inputStyle('eventDate'), colorScheme: 'light' }}
                    onFocus={() => setFocused('eventDate')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Location */}
                <div>
                  <label style={labelStyle}>
                    <MapPin size={13} color="#8B6F3E" />
                    Location <span style={{ color: '#c0783c' }}>*</span>
                  </label>
                  <input
                    type="text" id="location" name="location" required
                    value={formData.location} onChange={handleChange}
                    placeholder="City, State"
                    style={inputStyle('location')}
                    onFocus={() => setFocused('location')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ marginTop: '24px' }}>
                <label style={labelStyle}>
                  <MessageSquare size={13} color="#8B6F3E" />
                  Additional Details
                </label>
                <textarea
                  id="message" name="message" rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your event, special requests, or any questions..."
                  style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div style={{
                  marginTop: '20px', padding: '14px 18px',
                  border: '1.5px dashed rgba(80,130,80,0.6)',
                  background: 'rgba(80,130,80,0.06)',
                  fontFamily: "'Caveat', cursive", fontSize: '16px', color: '#3a6b3a',
                  borderRadius: '2px',
                }}>
                  ✓ Thank you! We'll reach out within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{
                  marginTop: '20px', padding: '14px 18px',
                  border: '1.5px dashed rgba(180,70,50,0.5)',
                  background: 'rgba(180,70,50,0.05)',
                  fontFamily: "'Caveat', cursive", fontSize: '16px', color: '#8b3a2a',
                  borderRadius: '2px',
                }}>
                  ✗ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              {/* Submit */}
              <div style={{ marginTop: '36px' }}>
                <div style={{ display: 'inline-block', padding: '1px', background: 'linear-gradient(90deg, #7a5208, #D4A843, #7a5208)', width: '100%' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: isSubmitting ? 'rgba(212,168,67,0.15)' : '#2c1f0e',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '14px',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase' as const,
                      color: isSubmitting ? '#8B6F3E' : '#D4A843',
                      transition: 'background 0.3s, color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        (e.currentTarget as HTMLButtonElement).style.background = '#D4A843';
                        (e.currentTarget as HTMLButtonElement).style.color = '#2c1f0e';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        (e.currentTarget as HTMLButtonElement).style.background = '#2c1f0e';
                        (e.currentTarget as HTMLButtonElement).style.color = '#D4A843';
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                  </button>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '13px', color: '#9a7c52', textAlign: 'center', marginTop: '12px', opacity: 0.8 }}>
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section style={{ padding: '64px 24px 80px', background: '#ede7d9' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '14px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8B6F3E', marginBottom: '8px' }}>
            ✦ the journey ✦
          </p>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: '30px', fontStyle: 'italic', color: '#2c1f0e', marginBottom: '44px' }}>
            What Happens Next?
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}>
            {[
              { num: '1', title: 'We Review', desc: "We'll review your request and check our availability for your event date.", tape: 'rgba(212,168,67,0.5)', tilt: '-2deg' },
              { num: '2', title: 'We Connect', desc: "We'll contact you to discuss details, answer questions, and finalise the package.", tape: 'rgba(130,155,95,0.45)', tilt: '1.5deg' },
              { num: '3', title: 'We Capture', desc: "We'll capture your special moments with professionalism and creativity.", tape: 'rgba(155,125,165,0.45)', tilt: '-1deg' },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  position: 'relative',
                  background: '#fffef8',
                  padding: '32px 20px 24px',
                  boxShadow: '0 4px 16px rgba(44,31,14,0.1)',
                  transform: `rotate(${step.tilt})`,
                  transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'rotate(0deg) translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = `rotate(${step.tilt})`; }}
              >
                {/* Tape */}
                <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '20px', background: step.tape }} />
                {/* Sketch corners */}
                {['tl','tr','bl','br'].map((c) => (
                  <div key={c} style={{
                    position: 'absolute', width: '14px', height: '14px',
                    top: c.includes('t') ? 8 : undefined,
                    bottom: c.includes('b') ? 8 : undefined,
                    left: c.includes('l') ? 8 : undefined,
                    right: c.includes('r') ? 8 : undefined,
                    borderTop: c.includes('t') ? '1px dashed rgba(139,111,62,0.45)' : undefined,
                    borderBottom: c.includes('b') ? '1px dashed rgba(139,111,62,0.45)' : undefined,
                    borderLeft: c.includes('l') ? '1px dashed rgba(139,111,62,0.45)' : undefined,
                    borderRight: c.includes('r') ? '1px dashed rgba(139,111,62,0.45)' : undefined,
                  }} />
                ))}

                <div style={{
                  width: '48px', height: '48px',
                  border: '1.5px solid #D4A843',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '22px',
                  fontStyle: 'italic',
                  color: '#8B6F3E',
                }}>
                  {step.num}
                </div>

                <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: '18px', fontStyle: 'italic', color: '#2c1f0e', marginBottom: '10px' }}>
                  {step.title}
                </h4>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 300, color: '#6b5230', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
