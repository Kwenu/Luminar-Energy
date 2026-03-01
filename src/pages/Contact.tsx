import React, { useState } from 'react';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon } from
'lucide-react';
type FormState = {
  name: string;
  email: string;
  phone: string;
  systemType: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;
export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    systemType: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Please describe your requirements';
    return e;
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };
  return (
    <div className="w-full">
      {/* Page Header */}
      <section
        className="w-full py-16 px-4 bg-white"
        style={{
          borderBottom: '1px solid #e5e7eb'
        }}>

        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{
              color: '#111111'
            }}>

            Get in Touch
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: '#6b7280'
            }}>

            Request a free site assessment, get a quote or ask us anything
            about solar maintenance.
          </p>
        </div>
      </section>

      {/* Two-column form + details */}
      <section
        className="w-full py-20 px-4"
        style={{
          backgroundColor: '#f5f5f5'
        }}>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div
                className="bg-white rounded-2xl p-8"
                style={{
                  border: '1px solid #e5e7eb'
                }}>

                {submitted ?
                <div className="text-center py-10">
                    <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      backgroundColor: '#f0fdf4'
                    }}>

                      <CheckCircleIcon
                      className="w-7 h-7"
                      style={{
                        color: '#22c55e'
                      }} />

                    </div>
                    <h2
                    className="text-xl font-bold mb-3"
                    style={{
                      color: '#111111'
                    }}>

                      Message Sent!
                    </h2>
                    <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: '#6b7280'
                    }}>

                      Thank you for reaching out. Our team will contact you
                      within 24 hours to discuss your requirements.
                    </p>
                  </div> :

                <>
                    <h2
                    className="text-xl font-bold mb-6"
                    style={{
                      color: '#111111'
                    }}>

                      Send Us a Message
                    </h2>
                    <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5">

                      {/* Name */}
                      <div>
                        <label
                        className="block text-sm font-medium mb-1.5"
                        style={{
                          color: '#374151'
                        }}
                        htmlFor="name">

                          Full Name{' '}
                          <span
                          style={{
                            color: '#ef4444'
                          }}>

                            *
                          </span>
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          backgroundColor: '#f5f5f5',
                          border: errors.name ?
                          '1.5px solid #ef4444' :
                          '1.5px solid #e5e7eb',
                          color: '#111111'
                        }}
                        aria-describedby={
                        errors.name ? 'name-error' : undefined
                        } />

                        {errors.name &&
                      <p
                        id="name-error"
                        className="text-xs mt-1.5"
                        style={{
                          color: '#ef4444'
                        }}>

                            {errors.name}
                          </p>
                      }
                      </div>

                      {/* Email */}
                      <div>
                        <label
                        className="block text-sm font-medium mb-1.5"
                        style={{
                          color: '#374151'
                        }}
                        htmlFor="email">

                          Email Address{' '}
                          <span
                          style={{
                            color: '#ef4444'
                          }}>

                            *
                          </span>
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          backgroundColor: '#f5f5f5',
                          border: errors.email ?
                          '1.5px solid #ef4444' :
                          '1.5px solid #e5e7eb',
                          color: '#111111'
                        }}
                        aria-describedby={
                        errors.email ? 'email-error' : undefined
                        } />

                        {errors.email &&
                      <p
                        id="email-error"
                        className="text-xs mt-1.5"
                        style={{
                          color: '#ef4444'
                        }}>

                            {errors.email}
                          </p>
                      }
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                        className="block text-sm font-medium mb-1.5"
                        style={{
                          color: '#374151'
                        }}
                        htmlFor="phone">

                          Phone Number
                        </label>
                        <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 77 123 4567"
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          backgroundColor: '#f5f5f5',
                          border: '1.5px solid #e5e7eb',
                          color: '#111111'
                        }} />

                      </div>

                      {/* System Type */}
                      <div>
                        <label
                        className="block text-sm font-medium mb-1.5"
                        style={{
                          color: '#374151'
                        }}
                        htmlFor="systemType">

                          System Type
                        </label>
                        <select
                        id="systemType"
                        name="systemType"
                        value={form.systemType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all appearance-none"
                        style={{
                          backgroundColor: '#f5f5f5',
                          border: '1.5px solid #e5e7eb',
                          color: form.systemType ? '#111111' : '#9ca3af'
                        }}>

                          <option value="">Select system type</option>
                          <option value="residential">
                            Residential (1–10 kW)
                          </option>
                          <option value="commercial">
                            Commercial (10–100 kW)
                          </option>
                          <option value="industrial">
                            Industrial (100 kW+)
                          </option>
                          <option value="unsure">Not sure</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                        className="block text-sm font-medium mb-1.5"
                        style={{
                          color: '#374151'
                        }}
                        htmlFor="message">

                          Message{' '}
                          <span
                          style={{
                            color: '#ef4444'
                          }}>

                            *
                          </span>
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your system and what you need..."
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all resize-none"
                        style={{
                          backgroundColor: '#f5f5f5',
                          border: errors.message ?
                          '1.5px solid #ef4444' :
                          '1.5px solid #e5e7eb',
                          color: '#111111'
                        }}
                        aria-describedby={
                        errors.message ? 'message-error' : undefined
                        } />

                        {errors.message &&
                      <p
                        id="message-error"
                        className="text-xs mt-1.5"
                        style={{
                          color: '#ef4444'
                        }}>

                            {errors.message}
                          </p>
                      }
                      </div>

                      <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60"
                      style={{
                        backgroundColor: '#111111',
                        color: '#ffffff'
                      }}>

                        {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </>
                }
              </div>
            </div>

            {/* Contact Details — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              <div
                className="bg-white rounded-2xl p-6"
                style={{
                  border: '1px solid #e5e7eb'
                }}>

                <h3
                  className="text-base font-semibold mb-5"
                  style={{
                    color: '#111111'
                  }}>

                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: '#fffbeb'
                      }}>

                      <MapPinIcon
                        className="w-4 h-4"
                        style={{
                          color: '#f98a10'
                        }} />

                    </div>
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{
                          color: '#9ca3af'
                        }}>

                        Address
                      </p>
                      <p
                        className="text-sm"
                        style={{
                          color: '#374151'
                        }}>

                        No. 45, Galle Road, Colombo 03, Sri Lanka
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: '#fffbeb'
                      }}>

                      <PhoneIcon
                        className="w-4 h-4"
                        style={{
                          color: '#f98a10'
                        }} />

                    </div>
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{
                          color: '#9ca3af'
                        }}>

                        Phone
                      </p>
                      <a
                        href="tel:+94112345678"
                        className="text-sm transition-colors hover:text-gray-900"
                        style={{
                          color: '#374151'
                        }}>

                        +94 11 234 5678
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: '#fffbeb'
                      }}>

                      <MailIcon
                        className="w-4 h-4"
                        style={{
                          color: '#f98a10'
                        }} />

                    </div>
                    <div>
                      <p
                        className="text-xs font-medium mb-0.5"
                        style={{
                          color: '#9ca3af'
                        }}>

                        Email
                      </p>
                      <a
                        href="mailto:info@luminarenergy.lk"
                        className="text-sm transition-colors hover:text-gray-900"
                        style={{
                          color: '#374151'
                        }}>

                        info@luminarenergy.lk
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className="bg-white rounded-2xl p-6"
                style={{
                  border: '1px solid #e5e7eb'
                }}>

                <h3
                  className="text-base font-semibold mb-5"
                  style={{
                    color: '#111111'
                  }}>

                  Business Hours
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <ClockIcon
                      className="w-4 h-4 flex-shrink-0"
                      style={{
                        color: '#f98a10'
                      }} />

                    <div className="flex justify-between w-full">
                      <span
                        className="text-sm"
                        style={{
                          color: '#6b7280'
                        }}>

                        Monday – Friday
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: '#111111'
                        }}>

                        8:00 – 17:00
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <ClockIcon
                      className="w-4 h-4 flex-shrink-0"
                      style={{
                        color: '#f98a10'
                      }} />

                    <div className="flex justify-between w-full">
                      <span
                        className="text-sm"
                        style={{
                          color: '#6b7280'
                        }}>

                        Saturday
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: '#111111'
                        }}>

                        8:00 – 13:00
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <ClockIcon
                      className="w-4 h-4 flex-shrink-0"
                      style={{
                        color: '#f98a10'
                      }} />

                    <div className="flex justify-between w-full">
                      <span
                        className="text-sm"
                        style={{
                          color: '#6b7280'
                        }}>

                        Sunday
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: '#9ca3af'
                        }}>

                        Closed
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: '#fffbeb',
                  border: '1px solid #fde68a'
                }}>

                <p
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: '#92400e'
                  }}>

                  Emergency Service
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: '#78350f'
                  }}>

                  For urgent system failures, call our 24/7 emergency line:
                </p>
                <a
                  href="tel:+94771234567"
                  className="text-sm font-bold mt-2 block"
                  style={{
                    color: '#b45309'
                  }}>

                  +94 77 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}