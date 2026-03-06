export enum UserRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  ADMIN = 'admin',
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  phoneNumber?: string;
  createdAt: number;
}

export interface DoctorProfile extends UserProfile {
  specialization: string;
  experience: string;
  bio: string;
  availableSlots?: string[]; // ISO strings or specific format
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string; // ISO string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  reason: string;
  createdAt: number;
}

export interface Prescription {
  id: string;
  appointmentId: string;
  patientId: string;
  doctorId: string;
  date: string;
  diagnosis: string;
  medicines: Medicine[];
  advice: string;
  createdAt: number;
}

export interface Medicine {
  name: string;
  dosage: string;
  timing: string; // e.g., "Before Food", "After Food"
  duration: string;
}
