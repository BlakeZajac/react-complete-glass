const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [jobAddress, setJobAddress] = useState("");
  // const [jobDescription, setJobDescription] = useState("");
  // const [attachment, setAttachment] = useState("");
  // const [errors, setErrors] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors({});
  //   if (!name) {
  //     setErrors({ ...errors, name: "Name is required" });
  //   }
  //   if (!email) {
  //     setErrors({ ...errors, email: "Email address is required" });
  //   }
  //   if (!phone) {
  //     setErrors({ ...errors, phone: "Phone number is required" });
  //   }
  //   if (!Object.keys(errors).length) {
  //     const formData = {
  //       name,
  //       email,
  //       phone,
  //       heardAbout: selectedOption,
  //       jobAddress,
  //       jobDescription,
  //       attachment,
  //     };
  //     localStorage.setItem("formData", JSON.stringify(formData));
  //   }
  // };
  // const handleAttachment = (event) => {
  //   setAttachment(event.target.files[0]);
  // };
  // // Dropdown
  // const options = [
  //   { value: "word-of-mouth", label: "Word of mouth" },
  //   { value: "google", label: "Google" },
  //   { value: "social-media", label: "Social media" },
  // ];
  // const [selectedOption, setSelectedOption] = useState(null);
  // const handleOptionChange = (option) => {
  //   setSelectedOption(event.target.value);
  // };
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div className="contact-form__field">
  //       <label htmlFor="name">
  //         Name <span className="contact-form__required">*</span>
  //       </label>
  //       <input
  //         type="text"
  //         id="name"
  //         value={name}
  //         placeholder="Your name"
  //         onChange={(event) => setName(event.target.value)}
  //       />
  //       {errors.name && <p>{errors.name}</p>}
  //     </div>
  //     <div className="contact-form__field">
  //       <label htmlFor="email">
  //         Email address <span className="contact-form__required">*</span>
  //       </label>
  //       <input
  //         type="email"
  //         id="email"
  //         value={email}
  //         placeholder="you@company.com"
  //         onChange={(event) => setEmail(event.target.value)}
  //       />
  //       {errors.email && <p>{errors.email}</p>}
  //     </div>
  //     <div className="contact-form__field">
  //       <label htmlFor="phone">
  //         Phone number <span className="contact-form__required">*</span>
  //       </label>
  //       <input
  //         type="tel"
  //         id="phone"
  //         value={phone}
  //         placeholder="1300 000 000"
  //         onChange={(event) => setPhone(event.target.value)}
  //       />
  //       {errors.phone && <p>{errors.phone}</p>}
  //     </div>
  //     <div className="contact-form__field">
  //       <label htmlFor="heardAbout">Where did you hear about us?</label>
  //       <Dropdown
  //         options={options}
  //         placeholder="Select an option"
  //         onChange={handleOptionChange}
  //       />
  //     </div>
  //     <div className="contact-form__field">
  //       <label htmlFor="jobAddress">Job address</label>
  //       <input
  //         type="text"
  //         id="jobAddress"
  //         value={jobAddress}
  //         placeholder="Job address"
  //         onChange={(event) => setJobAddress(event.target.value)}
  //       />
  //       <p className="contact-form__hint">
  //         Please provide your address, city, town or suburb.
  //       </p>
  //     </div>
  //     <div className="contact-form__field">
  //       <label htmlFor="jobDescription">Job description</label>
  //       <input
  //         type="textarea"
  //         id="jobDescription"
  //         value={jobDescription}
  //         placeholder="Job description"
  //         onChange={(event) => setJobDescription(event.target.value)}
  //       />
  //       <p className="contact-form__hint">
  //         Please include any information that may help us provide you with a
  //         more accurate quote.
  //       </p>
  //     </div>
  //     <div className="contact-form__field">
  //       <input
  //         className="btn btn--blue"
  //         type="submit"
  //         id="submit"
  //         value="Submit enquiry"
  //         onSubmit={handleSubmit}
  //       />
  //     </div>
  //   </form>
  // );
};

export default Form;
