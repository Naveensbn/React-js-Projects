const UserData = [
    {   
    name:"Sebastian", 
    city:"Kerala",
    description:"Front-end Developer", 
    skills:["sql","html",
    "css","javascript","react js","mangoDB","node js"],
    online:true, 
    profile:"images/students.jpg"

    },
    {   
        name:"Naveen sebastian", 
        city:"Chennai",
        description:"Python Full Stack Developer", 
        skills:["python","django","sql","html",
        "css","javascript","react js"],
        online:false, 
        profile:"images/student4.jpeg"
    
        },
        {   
            name:"Robert Downey Jr", 
            city:"New York",
            description:"Senior Software Developer", 
            skills:["c","c++","java","python","django","sql","html",
            "css","javascript","react js"],
            online:true, 
            profile:"images/student3.png"
        
            },
            {   
                name:"Rashmika", 
                city:"Chennai",
                description:"Python Web Developer", 
                skills:["python","django","sql","html",
                "css","javascript","react js"],
                online:false, 
                profile:"images/student2.png"
            
                },
]

function User(props){
    return(
        <div className="cardcontainer">
            <span className={props.online? "pro online" : "pro offline"}>
             {props.online? "Online" : "Offline"}
            </span>
            <img src={props.profile} className="img" 
            alt="user" width="150" height="150" />
            <h3>{props.name} </h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            {/* <P>front-end developer</P> */}
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary Outline">Following</button>
            </div>
            <div className="skills">
                <h6>skills</h6>
                <ul>
                    {props.skills.map((skills,index) => (
                        <li key={index}>{skills}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

const UserCard = () => {
  return <>
  {
    UserData.map((user,index) =>(
        <User key={index}
        name={user.name}
        city={user.city}
        description={user.description}
        online={user.online}
        profile={user.profile}
        skills={user.skills}

        />
    ))};
  </>
   
};

export default UserCard


// {  return <User name="Madonna sebastian" city="Kerala"
// description="Python Full Stack Developer" 
// skills={["python","django","sql","html",
// "css","javascript","react js"]} online={true} 
// profile="images/1.jpg"/> ;
//   }