export default  function NetflixRegisterComponents() 
{
    return (
        <div >
        <p className="text-center m-10">Ready to watch? Enter your emails to creatte your profile.</p>
        <div className="input-group input-group-lg">
            <input type="email" className="form-control"  />
            <button className="btn btn-danger">
                Get Started
                <span className="bi bi-chevron-right"></span>
            </button>
        </div>
        </div>
    );
}