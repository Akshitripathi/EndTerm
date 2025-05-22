import React, { useState, useEffect } from 'react';
import { createEnrollment, getEnrollments } from '../api/enrollmentService';

const Enrollment = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    course: '',
  });

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
  try {
    const response = await getEnrollments(); 
    setEnrollments(response.data); 
  } catch (error) {
    console.error('Error fetching enrollments:', error);
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEnrollment(formData);
      fetchEnrollments();
      setFormData({ studentName: '', email: '', course: '' });
    } catch (error) {
      console.error('Error creating enrollment:', error);
    }
  };

  return (
    <div>
      <h1>Enrollments</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Enrollment</button>
      </form>
      <ul>
        {enrollments.map((enrollment) => (
          <li key={enrollment._id}>
            {enrollment.studentName} - {enrollment.email} - {enrollment.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Enrollment;
