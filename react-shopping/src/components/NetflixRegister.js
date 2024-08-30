export  function NetflixRegisterComponents() 
{
    return (
        <div className="container-fluid text-center mt-3 bg-dark p-3 text-white w-75">
        <p>Ready to watch? Enter your emails to creatte your profile.</p>
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