import React, { Component } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

class LoginPopup extends Component {
    static contextType = StoreContext;

    constructor(props) {
        super(props);
        this.state = {
            currState: 'Sign-Up',
            data: {
                name: '',
                email: '',
                password: ''
            },
            isChecked: false
        };
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }));
    };

    onCheckboxChange = (event) => {
        this.setState({ isChecked: event.target.checked });
    };

    OnLogin = async (event) => {
        event.preventDefault();
        const { url, setToken } = this.context;
        const { currState, data } = this.state;
        let newUrl = url;
        if (currState === 'Login') {
            newUrl += '/api/user/login';
        } else {
            newUrl += '/api/user/register';
        }

        try {
            console.log('Sending request to:', newUrl);
            console.log('Data:', data);
            const response = await axios.post(newUrl, data);
            console.log('Response:', response.data);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                this.props.setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
                alert(`Error: ${error.response.data.message || 'An error occurred. Please try again.'}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
                alert('No response received from the server. Please try again.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
                alert('An error occurred. Please try again.');
            }
            console.error('Error config:', error.config);
        }
    };

    render() {
        const { currState, data, isChecked } = this.state;
        return (
            <div className='login-popup'>
                <form onSubmit={this.OnLogin} className='login-popup-container'>
                    <div className='login-popup-title'>
                        <h2>{currState}</h2>
                        <img onClick={() => this.props.setShowLogin(false)} src={assets.cross_icon} alt='' />
                    </div>
                    <div className='login-popup-inputs'>
                        {currState === 'Login' ? (
                            <></>
                        ) : (
                            <input
                                name='name'
                                onChange={this.onChangeHandler}
                                value={data.name}
                                type='text'
                                placeholder='Your Name'
                                required
                            />
                        )}
                        <input
                            name='email'
                            onChange={this.onChangeHandler}
                            value={data.email}
                            type='email'
                            placeholder='Your Email'
                            required
                        />
                        <input
                            name='password'
                            onChange={this.onChangeHandler}
                            value={data.password}
                            type='password'
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button type='submit' disabled={!isChecked}>
                        {currState === 'Sign-Up' ? 'Create Account' : 'Login'}
                    </button>
                    <div className='login-popup-condition'>
                        <input type='checkbox' checked={isChecked} onChange={this.onCheckboxChange} required />
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currState === 'Login' ? (
                        <p>
                            Create a new account? <span onClick={() => this.setState({ currState: 'Sign-Up' })}>Click here</span>
                        </p>
                    ) : (
                        <p>
                            Already have an account? <span onClick={() => this.setState({ currState: 'Login' })}>Login here</span>
                        </p>
                    )}
                </form>
            </div>
        );
    }
}

export default LoginPopup;