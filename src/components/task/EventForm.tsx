import React, { useState } from 'react';
import './EventForm.scss';
import InputFields from '../../ui-elements/inputfields/labeledInput/inputFields';

const EventForm: React.FC = () => {
  const [eventName, setEventName] = useState('');
  const [eventPoster, setEventPoster] = useState<File | null>(null);
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventVenueLink, setEventVenueLink] = useState('');
  const [eventAmount, setEventAmount] = useState<number>(0);
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contentDoc, setContentDoc] = useState('');

  const handlePosterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEventPoster(file);
    }
  };
  //title,desc,date,venue,venuelink,rules and regulations,category,submission,prize1,prize2,prize3, timings1,timings2

  const [title, setTitle] = useState<string>("");
  const [titleError, setTitleError] = useState<boolean>(false);

  const [description, setDescription] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const [date, setDate] = useState<Date>();
  const [dateError, setDateError] = useState<boolean>(false);
  const [venue, setVenue] = useState<string>("");
  const [venueError, setVenueError] = useState<boolean>(false);

  const [venueLink, setVenueLink] = useState<string>("");
  const [venueLinkError, setVenueLinkError] = useState<boolean>(false);

  const [rule1, setRule1] = useState<string>("");
  const [rule1Error, setRule1Error] = useState<boolean>(false);

  const [rule2, setRule2] = useState<string>("");
  const [rule2Error, setRule2Error] = useState<boolean>(false);

  const [rule3, setRule3] = useState<string>("");
  const [rule3Error, setRule3Error] = useState<boolean>(false);

  const [rule4, setRule4] = useState<string>("");
  const [rule4Error, setRule4Error] = useState<boolean>(false);

  const [rule5, setRule5] = useState<string>("");
  const [rule5Error, setRule5Error] = useState<boolean>(false);
  const [rule6, setRule6] = useState<string>("");
  const [rul6Error, setRule6Error] = useState<boolean>(false);

  const [category, setCategory] = useState<string>("");
  const [categoryError, setCategoryError] = useState<boolean>(false);

  const [submission, setSubmission] = useState<string>("");
  const [submissionError, setSubmissionError] = useState<boolean>(false);

  const [prize1, setPrize1] = useState<string>("");
  const [prize1Error, setPrize1Error] = useState<boolean>(false);
  const [prize2, setPrize2] = useState<string>("");
  const [prize2Error, setPrize2Error] = useState<boolean>(false);
  const [prize3, setPrize3] = useState<string>("");
  const [prize3Error, setPrize3Error] = useState<boolean>(false);

  const [timings1, setTimings1] = useState<string>("");
  const [timings1Error, setTimings1Error] = useState<boolean>(false);
  const [timings2, setTimings2] = useState<string>("");
  const [timings2Error, setTimings2Error] = useState<boolean>(false);

  //title,desc,date,venue,venuelink,rules and regulations,category,submission,prize1,prize2,prize3, timings1,timings2

  function handleSubmit(){
    if (title === "" || title === null || title === undefined) {
      setTitleError(true);
      return;
    }
    if (description === "" || description === null || description=== undefined) {
      setDescriptionError(true);
      return;
    }
    if ( date === null || date === undefined) {
      setDateError(true);
      return;
    }
    if (venue === "" || venue === null || venue === undefined) {
      setVenueError(true);
      return;
    }
    if (venueLink === "" || venueLink === null || venueLink === undefined) {
      setVenueLinkError(true);
      return;
    }
    if (rule1 === "" || rule1 === null || rule1 === undefined) {
      setRule1Error(true);
      return;
    }
    if (rule2 === "" || rule2 === null || rule2 === undefined) {
      setRule2Error(true);
      return;
    }
    if (rule3 === "" || rule3 === null || rule3 === undefined) {
      setRule3Error(true);
      return;
    }
    if (rule4 === "" || rule4 === null || rule4 === undefined) {
      setRule4Error(true);
      return;
    }
    if (rule5 === "" || rule5 === null || rule5 === undefined) {
      setRule5Error(true);
      return;
    }
    if (rule6 === "" || rule6 === null || rule6 === undefined) {
      setRule6Error(true);
      return;
    }
    if (category === "" || category === null || category === undefined) {
      setCategoryError(true);
      return;
    }
    if (submission === "" || submission === null || submission === undefined) {
      setSubmissionError(true);
      return;
    }
    if (prize1 === "" || prize1 === null || prize1 === undefined) {
      setPrize1Error(true);
      return;
    }
    if (prize2 === "" || prize2 === null || prize2 === undefined) {
      setPrize2Error(true);
      return;
    }
    if (prize3 === "" || prize3 === null || prize3 === undefined) {
      setPrize3Error(true);
      return;
    }
    if (timings1 === "" || timings1 === null || timings1 === undefined) {
      setTimings1Error(true);
      return;
    }
    if (timings2 === "" || timings2 === null || timings2 === undefined) {
      setTimings2Error(true);
      return;
    }
  }

  return (
    <div className="event-form">
      <div className="eventFormTitle">
        <h1 className='eventFormTitleh1'>Event Form</h1>
      </div>
      <div className="event-form-container">

        <div className="eventinputs">
          <InputFields
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            type="Title"
            error={titleError}
            errorMsg="Please enter title"
            label="Title"
            required
          ></InputFields>
          <InputFields
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            type="text"
            error={descriptionError}
            errorMsg="Please enter description"
            label="Description"
            required
          />

          <InputFields
            value={date ? date.toISOString().split('T')[0] : ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))}
            type="date"
            error={dateError}
            errorMsg="Please select date"
            label="Date"
            required
          />

          <InputFields
            value={venue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVenue(e.target.value)}
            type="text"
            error={venueError}
            errorMsg="Please enter venue"
            label="Venue"
            required
          />

          <InputFields
            value={venueLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVenueLink(e.target.value)}
            type="text"
            error={venueLinkError}
            errorMsg="Please enter venue link"
            label="Venue Link"
            required
          />

          <InputFields
            value={rule1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRule1(e.target.value)}
            type="text"
            error={rule1Error}
            errorMsg="Please enter rule 1"
            label="Rule 1"
          />
          <InputFields
            value={rule2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRule2(e.target.value)}
            type="text"
            error={rule2Error}
            errorMsg="Please enter rule 2"
            label="Rule 2"
          />
          <InputFields
            value={rule3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRule3(e.target.value)}
            type="text"
            error={rule3Error}
            errorMsg="Please enter rule 3"
            label="Rule 3"
          />
          <InputFields
            value={rule4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRule4(e.target.value)}
            type="text"
            error={rule4Error}
            errorMsg="Please enter rule 4"
            label="Rule 4"
          />
          <InputFields
            value={rule5}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRule5(e.target.value)}
            type="text"
            error={rule5Error}
            errorMsg="Please enter rule 5"
            label="Rule 5"
          />

          <InputFields
            value={rule6}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRule6(e.target.value)}
            type="text"
            error={rule5Error}
            errorMsg="Please enter rule 6"
            label="Rule 6"
          />

          <InputFields
            value={category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
            type="text"
            error={categoryError}
            errorMsg="Please enter category"
            label="Category"
            required
          />

          <InputFields
            value={submission}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubmission(e.target.value)}
            type="text"
            error={submissionError}
            errorMsg="Please enter submission"
            label="Submission"
            required
          />

          <InputFields
            value={prize1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrize1(e.target.value)}
            type="text"
            error={prize1Error}
            errorMsg="Please enter prize1"
            label="Prize 1"
          />

          <InputFields
            value={prize2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrize2(e.target.value)}
            type="text"
            error={prize2Error}
            errorMsg="Please enter prize2"
            label="Prize 2"
          />

          <InputFields
            value={prize3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrize3(e.target.value)}
            type="text"
            error={prize3Error}
            errorMsg="Please enter prize3"
            label="Prize 3"
          />

          <InputFields
            value={timings1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimings1(e.target.value)}
            type="text"
            error={timings1Error}
            errorMsg="Please enter timings1"
            label="Timings 1"
            required
          />

          <InputFields
            value={timings2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimings2(e.target.value)}
            type="text"
            error={timings2Error}
            errorMsg="Please enter timings2"
            label="Timings 2"
          />
        </div>
      </div >
        <div className="eventFormSubmit">
          <button onClick={handleSubmit}>
            Submit
          </button>
        </div>
    </div>

  );
};

export default EventForm;
