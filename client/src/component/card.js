import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.info}</p>
            <a href={props.link} className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
