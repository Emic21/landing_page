import React from 'react'

const Sections = () => {
  return (
    <div>
      <div className="w-[80%] flex flex-col items-start  space-y-2">
          <h2 className="text-[#091133] text-3xl font-medium">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-[#6F7CB2] text-[16px] font-normal">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.</p>
        </div>
    </div>
  )
}

export default Sections

import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Patient'); // Default role is Patient
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        if (!name || !email || !phone || !password) {
            setErrors(["All fields are required."]);
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors(["Please enter a valid email address."]);
            return false;
        }
        if (password.length < 6) {
            setErrors(["Password must be at least 6 characters long."]);
            return false;
        }
        return true;
    };

    const register = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    role: role,
                }),
            });

            const json = await response.json();

            if (json.authtoken) {
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("role", role);

                navigate("/");
                window.location.reload();
            } else {
                if (json.errors) {
                    setErrors(json.errors.map((error) => error.msg));
                } else {
                    setErrors([json.error]);
                }
            }
        } catch (error) {
            setErrors(["An error occurred. Please try again."]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <h2>Sign Up</h2> {/* Added heading */}
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                name="role"
                                id="role"
                                className="form-control"
                            >
                                <option value="Patient">Patient</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                        </div>
                        {errors.length > 0 && (
                            <div className="err" style={{ color: 'red' }}>
                                {errors.map((error, index) => (
                                    <div key={index}>{error}</div>
                                ))}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Registering..." : "Sign Up"}
                        </button>
                        <div className="form-group">
                            <p>
                                Already a member? <Link to="/login">Login</Link> {/* Added login link */}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;