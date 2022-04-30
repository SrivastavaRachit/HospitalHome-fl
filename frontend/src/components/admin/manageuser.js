import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Typography,
  } from "@material-ui/core";
  import { useContext, useEffect, useState } from "react";
  import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
  import { UserContext } from "../../providers/userContext";
  
  const ManageUser = (props) => {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const userService = useContext(UserContext);
  
    const fetchUsers = () => {
      userService.getAllUsers().then((data) => {
        setUsersList(data);
        setLoading(false);
      });
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const deleteUser = (id) => {
      userService.deleteUser(id).then((res) => {
        console.log(res);
        fetchUsers();
      });
    };
  
    const displayUsers = () => {
      return usersList.map((user, index) => {
        if (!loading) {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{user.fullname}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <h5>{user.email}</h5>
                <br />
                <h5>{user.password}</h5>
                <br />
                <h5>{user.username}</h5>
                <br /> */}
                <p>{user.email}</p>
                <p>{user.username}</p>
  
                <br/>
                
                <Button
                  varaint="outline"
                  color="secondary"
                  onClick={(e) => deleteUser(user._id)}
                >
                  Delete
                </Button>
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return;
        }
      });
    };
  
    return <div style={{ marginTop: "5rem" }}>{displayUsers()}</div>;
  };
  
  export default ManageUser;