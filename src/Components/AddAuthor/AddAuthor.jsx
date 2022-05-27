import React, { useState } from 'react';
import './AddAuthor.scss';

const AddAuthor = () => {
	const [validEmail, setvalidEmail] = useState(false);
	const validateEmail = () => {
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		const currentEmail = document.getElementById('email').value;
		const emailValidation = document.getElementById('validation');

		if (currentEmail.match(pattern)) {
			emailValidation.innerHTML = 'Valid email';
			emailValidation.classList.add('valid');
			emailValidation.classList.remove('invalid');
			setvalidEmail(true);
		} else {
			emailValidation.innerHTML = 'Incorrect email format';
			emailValidation.classList.add('invalid');
			emailValidation.classList.remove('valid');
			setvalidEmail(false);
		}
	};

	const handleClick = (event) => {
		event.preventDefault();
		const firstName = document.getElementById('first-name').value;
		const lastName = document.getElementById('last-name').value;
		const company = document.getElementById('company').value;
		const email = document.getElementById('email').value;
		const jobTitle = document.getElementById('job-title').value;
		const jobDescription = document.getElementById('job-description').value;
		if(!validEmail){
			alert("Please input correct email address")
		}
		if (
			firstName &&
			lastName &&
			company &&
			email &&
			jobTitle &&
			jobDescription &&
			validEmail
		) {
			console.log('First Name: ', firstName);
			console.log('Last Name: ', lastName);
			console.log('Company: ', company);
			console.log('Email: ', email);
			console.log('Job Title: ', jobTitle);
			console.log('Job Description: ', jobDescription);
			alert("Succesfully added " + firstName + " " + lastName + "!")
		} else {
			const emptyItems = [
				{ firstName },
				{ lastName },
				{ company },
				{ email },
				{ jobTitle },
				{ jobDescription },
			];
			for (const item of emptyItems) {
				const isEmpty = Object.values(item)[0] === '' ? true : false;
				if (isEmpty) {
					alert('Please input value for: ' + Object.keys(item))
				}
			}
		}
	};

	return (
		<form>
			<div className='form-inputs'>
				<div className='form-row'>
					<label className='label' htmlFor='first-name'>
						First Name:
					</label>
					<input
						className='input'
						id='first-name'
						placeholder='Enter First Name'></input>
				</div>
				<div className='form-row'>
					<span className='label' htmlFor='last-name'>
						Last Name:
					</span>
					<input
						className='input'
						id='last-name'
						placeholder='Enter Last Name'></input>
				</div>
				<div className='form-row'>
					<label className='label' htmlFor='company'>
						Company:
					</label>
					<input
						className='input'
						id='company'
						placeholder='Enter Company Name'></input>
				</div>
				<div className='form-row'>
					<label className='label' htmlFor='email'>
						Email:
					</label>
					<input
						className='input'
						id='email'
						placeholder='Enter Valid Email'
						onChange={validateEmail}></input>
				</div>
				<div className='form-row'>
					<label className='label' htmlFor='job-title'>
						Job Title:
					</label>
					<input
						className='input'
						id='job-title'
						placeholder='Enter Job Title'></input>
				</div>
				<div className='form-row'>
					<label className='label' htmlFor='job-title'>
						Job Description:
					</label>
					<textarea
						className='input'
						id='job-description'
						placeholder='Enter Job Description'></textarea>
				</div>

				<label id='validation'></label>
				<button type='submit' className='add-button' onClick={handleClick}>
					<h2>Add Author</h2>
				</button>
			</div>
		</form>
	);
};

export default AddAuthor;
