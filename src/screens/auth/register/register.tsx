// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { ChangeEvent, useEffect, useState} from 'react';
// import '../auth.scss'
// import iitmlogo from '../../../assets/logos/iitmlogo.svg'
// import cealogo from '../../../assets/logos/cea.png'
// import Address from '../../../assets/icons/address.svg'
// import PersonalDetails from '../../../assets/icons/personalDetails.svg'
// import Education from '../../../assets/icons/education.svg'
// import Button from '../../../ui-elements/buttons/buttons';
// import { Link, useNavigate } from 'react-router-dom'
// import Collapsable from '../../../components/collapsable/collapsable';
// import Container from '../../../components/container/container';
// import InputFields from '../../../ui-elements/inputfields/labeledInput/inputFields';
// // import { useRegisterUserMutation } from '../../generated/graphql';
// import Hidden from '../../../assets/icons/hidden.svg'
// import showEye from '../../../assets/icons/eye.svg' 
// import { useSelector } from 'react-redux';
// import MessagePopup from '../../../ui-elements/messagePopup/messagePopup';
// import Dropdown from '../../../ui-elements/dropdown/dropdown';
// import ValidateMobile from '../../../regexExpressions/mobileValidation';
// import ValidateEmail from '../../../regexExpressions/emailValidation';
// import ValidatePin from '../../../regexExpressions/pinValidation';
// import { RootState } from '../../../redux/reducers';
// import { useSignUpUserMutation } from '../../../generated/graphql';
// import hostel from '../../../utils/hostel';
// import country from '../../../utils/country';

// type RegisterProps = {
    
// };

// const Register:React.FC<RegisterProps> = () => {

//     const navigate = useNavigate()
//     const [name, setName] = useState<string>()
//     const [email, setEmail] = useState<string>()
//     const [mobile, setMobile] = useState<string>()
//     const [createPass, setCreatePass] = useState<string>()
//     const [confirmPass, setConfirmPass] = useState<string>()
//     const [college, setCollege] = useState<string>()
//     const [address, setAddress] = useState<string>()
//     const [year, setYear] = useState<string>()
//     const [pincode, setPincode] = useState<string>()
//     const [answer, setAnswer] = useState<string>()
//     const [createPassSuffixIcon, setCreatePassSuffixIcon] = useState<string>(showEye)
//     const [confirmPassSuffixIcon, setConfirmPassSuffixIcon] = useState<string>(showEye)

//     const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation();
//     const [emptyError, setEmptyError] = useState<boolean>(false)
//     const [errorMsg, setErrorMsg] = useState<string>("Please fill all the required fields")


//     const onRegister = async () => {
//         if (!name || !email || !mobile || !college || !address || !year || !pincode || !answer || !createPass || !confirmPass || createPass !== confirmPass) {
//             setEmptyError(true)
//             setTimeout(()=>{setEmptyError(false)},4000)
//             return 
//         }

//         if(!ValidateEmail(email)){
//             setEmptyError(true)
//             setTimeout(()=>{setEmptyError(false)},4000)
//             setErrorMsg("Please enter a valid email address")
//             return
//         }

//         if(!ValidateMobile(mobile)){
//             setEmptyError(true)
//             setTimeout(()=>{setEmptyError(false)},4000)
//             setErrorMsg("Please enter a valid mobile number")
//             return
//         }

//         if(!ValidatePin(pincode)){
//             setEmptyError(true)
//             setTimeout(()=>{setEmptyError(false)},4000)
//             setErrorMsg("Please enter a valid Pin Code")
//             return
//         }
//         try {
//             await signUpUserMutation({
//                 variables: {
//                     data: {
//                         name,
//                         email,
//                         password: confirmPass,
//                         mobile,
//                         organization: college,
//                         gender,
//                         country,
//                         type,
//                         isIITM,
//                         hostel,
//                     }
//                 }
//             })
//         } catch (e: any) {
//             console.log(e);
//             if(e.message === "User already created. Login to continue") {
//                 setErrorMsg("User already created. Login to continue")
//             } else setErrorMsg('Error in Registering. Try again')

//             setEmptyError(true)
//             setTimeout(()=>{setEmptyError(false)},4000)
//         }
//     }

//     useEffect(() => {
//         const keyDownHandler = (event: KeyboardEvent) => {
//             if (event.key === 'Enter') {
//                 event.preventDefault();
//                 onRegister();
//             }
//         };

//         document.addEventListener('keydown', keyDownHandler);

//         return () => {
//         document.removeEventListener('keydown', keyDownHandler);
//         };
//     });

//     const onShowCreatePassword = () => {
//         var passInput = document.getElementById('createPass') as HTMLInputElement
//         if(passInput.type === 'password'){
//             passInput.type = 'text'
//             setCreatePassSuffixIcon(Hidden)
//         }else{
//             passInput.type = 'password'
//             setCreatePassSuffixIcon(showEye)
//         }
//     }

//     const onShowConfirmPassword = () => {
//         var passInput = document.getElementById('confirmPass') as HTMLInputElement
//         if(passInput.type === 'password'){
//             passInput.type = 'text'
//             setConfirmPassSuffixIcon(Hidden)
//         }else{
//             passInput.type = 'password'
//             setConfirmPassSuffixIcon(showEye)
//         }
//     }

//     const {device} = useSelector((state: RootState) => state.windowSize)
    
//     return (
//         <div className='page'>
//             { emptyError && <MessagePopup message={errorMsg} category='warning' position='bottom-center'/>}
//             {/* { loading && <MessagePopup message={'Loading...'} position={'top-center'} category={'info'} /> }
//             { error && <MessagePopup message={'Error in Registering'} position={'top-center'} category={'warning'} delay={3}/> } */}
//             <div className='logos'>
//                 <div className='logo-container'>
//                     <img src={iitmlogo} alt='IITMadras Logo' className='logo'/>
//                 </div>
//                 <div className='logo-container'>
//                     <img src={cealogo} alt='CEA Logo' className='logo'/>
//                 </div>
//             </div>

//             <div className='page-content'>
//                 <div className={`page-heading ${device}`}>Create an Account</div>

//                 <div className={`form-container ${device}`}>
//                     <Container>
//                         <div className='form signUp-box'>
//                             <div className={`collapsable-box ${device}`}>
//                                 <Collapsable heading='Personal Details' prefixIcon={PersonalDetails}>
//                                     <div className='questions'>
//                                         <InputFields label='Name' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} edges='round' placeholder='Enter your name here' required/>
//                                         <InputFields label='Email' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type='email' edges='round' placeholder='Enter your email here' required/>
//                                         <InputFields label='Mobile no' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)} type='number' edges='round' placeholder='Enter your mobile here' required/>
//                                         <InputFields 
//                                             label='Create Passowrd'
//                                             id='createPass'
//                                             theme='dark' 
//                                             onChange={(e: ChangeEvent<HTMLInputElement>) => {setCreatePass(e.target.value)}} 
//                                             edges='round' 
//                                             placeholder='Create a new password' 
//                                             required 
//                                             suffixIcon={createPassSuffixIcon}
//                                             onSuffixClick={onShowCreatePassword} 
//                                             type='password'   
//                                         />
//                                         <InputFields 
//                                             label='Confirm Passowrd'
//                                             id='confirmPass'
//                                             theme='dark' 
//                                             onChange={(e: ChangeEvent<HTMLInputElement>) => {setConfirmPass(e.target.value)}} 
//                                             edges='round' 
//                                             placeholder='Confirm your password' 
//                                             required 
//                                             suffixIcon={confirmPassSuffixIcon}
//                                             onSuffixClick={onShowConfirmPassword}  
//                                             type='password'
//                                         />
//                                     </div>
//                                 </Collapsable>
//                             </div>
//                             <div className={`collapsable-box ${device}`}>
//                                 <Collapsable heading='Education' prefixIcon={Education}>
//                                     <div className='questions'>
//                                         <InputFields label='College' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollege(e.target.value)} placeholder='Enter your college name here' edges='round' required/>
//                                         <Dropdown theme="dark" onSelect={(value)=>{setYear(value)}} placeholder='Select your year of study' options={[{value: '1st'}, {value: '2nd'}, {value: '3rd'}, {value: '4th'}]}/>
//                                     </div>
//                                 </Collapsable>
//                             </div>
//                             <div className={`collapsable-box ${device}`}>
//                                 <Collapsable heading='Address' prefixIcon={Address}>
//                                     <div className='questions'>
//                                         <InputFields label='Address' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)} placeholder='Enter your address here' edges='round' required/> 
//                                         <InputFields label='Pin Code' theme='dark' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPincode(e.target.value)} type='number' placeholder='Enter your pincode here' edges='round' required/> 
//                                     </div>
//                                 </Collapsable>
//                             </div>
//                         </div>
//                     </Container>
//                 </div>

//                 <div className={`buttons-row ${device}`}>
//                     <div className='login-link'>
//                         Already have an account?
//                         <Link className='link' to={'/login'}>Login here</Link>
//                     </div>
//                     <div className='create-account'>
//                         <Button text='Create Account' onClick={onRegister} fill='solid' edges='round'/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Register
export {}