export default function Card(props) {
    return(

        <div className="container">
            <div className="row p-2">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                    <img src={props.imageUrl} alt="picture of the visited place" />
                </div>
                <div className="col-lg-8  col-md-12 col-sm-12 col-xs-12  d-flex flex-column align-items-start">
                    <div className="d-flex">
                        <p className="mx-2">{props.location}</p>
                        <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    
                    <h1 className="pb-2 align-self-start">
                        {props.title}
                    </h1>
                    <div className="d-flex flex-column align-items-start">
                        <p className="align-self-start">
                            <strong> 
                            {props.startDate} - {props.endDate}
                            </strong>
                        </p>
                        <p className = "description">
                            {props.description}
                        </p>
                    </div>
                    </div>
                </div>
        </div>
    )
}