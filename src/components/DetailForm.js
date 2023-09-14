import '../components/DetailForm.css';


const DetailForm = ({ details, setDetails, setAvailable }) => {

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setDetails({
            ...details, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
        setAvailable(true)

    };
    return (
        <>

            <div  style={{backgroundImage:'url(https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>

                <div style={{backgroundImage:'url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}} class="container py-4 px-5  border border-warning border-5 rounded">

                    <form className='pb-4' onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label class="form-label" for="name">Name</label>
                            <input  class="form-control" id="name" type="text" name="name" onChange={handleChange} placeholder="Name" />
                        </div>

                        <div class="mb-3 ">
                            <label class="form-label" for="emailAddress">Occasion</label>
                            <input class="form-control" id="occasion" type="text" name="occasion" onChange={handleChange} placeholder="Occasion" />
                        </div>
                        <div className='row'>
                            <div class="mb-3 col-lg-6">
                                <label class="form-label" for="date">Date</label>
                                <input class="form-control" id="date" type="date" name="date" onChange={handleChange} placeholder="Date" />
                            </div>
                            <div class="mb- col-lg-6">
                                <label class="form-label" for="timing">Timing</label>
                                <input class="form-control" id="time" type="time" name="timing" onChange={handleChange} placeholder="Timing" />
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="address">Address</label>
                            <input class="form-control" id="address" type="text" name="address" onChange={handleChange} placeholder="Address" />
                        </div>

                        <div class="d-grid">
                            <button style={{backgroundColor:'yellow'}} class="btn " type="submit">Submit</button>
                        </div>

                    </form>

                </div>
<hr/>
            </div>

        </>
    )
}


export default DetailForm