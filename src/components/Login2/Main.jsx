import React, { useState } from "react";
import {useStore} from '../../redux/store/Provider';
import {setUSer} from '../../redux/actions/LoginAction';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Input,
  Card,
  CardImg,
  CardBody,
} from "reactstrap";

const Main = () => {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [encPassword, seteEncPassword] = useState("");
  const [dncPassword, setDncPassword] = useState("");
  const [store,dispatch] = useStore();
  const onChangePassword = (e) => {
    setPassword(e);
    seteEncPassword(encrypt(e));
  };
  const onChangeUserName = (e) => {
    setUserName(e);

  };
  function onLogin() {
    dispatch(setUSer(username));
    history.push("/");
  }
  const handleKeyPress = (target) => {};
  //console.log(encPassword);
  console.log(decrypted("123abc"));
  function encrypt(pass) {
    var number;
    var string = [];
    var c;
    for (var i = 0; i < pass.length; i++) {
      for (var j = 0; j < 3; j++) {
        do {
          number = Math.floor(Math.random() * (94 - 33) + 33);
        } while ((number >= 48 && number <= 57) || number === 44); //don't create a number
        c = String.fromCharCode(number);
        string.push(c);
      }
      string.push(pass.charCodeAt(i) - 19);
    }
    return string.join("");
  }
  function decrypted(encPass) {
    var string = [];
    var string1 = [];
    var c;
    for (var i = 0; i < encPass.length; i++) {
      c = encPass.charAt(i);
      if (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58) {
        do {
          string.push(c);
          i= i +1;
          if (i < encPass.length) {
            c = encPass.charAt(i);
          } else {
            break;
          }
        } while (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58);
        string1.push(String.fromCharCode(parseInt(string.join("")) + 19));
        string = [];
      }
    }
    return string1.join("");
  }
  return (
    <div>
      <main role="main">
        <Jumbotron className="text-center">
          <Container>
            <div>
              <Card body outline color="success">
                <CardImg
                  top
                  width="80"
                  height="250"
                  src="https://i.ibb.co/x6ZdLxZ/Sandwich.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      username
                    </InputGroupAddon>
                    <Input
                      onChange={(e) => onChangeUserName(`${e.target.value}`)}
                      onKeyPress={handleKeyPress}
                    />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      password
                    </InputGroupAddon>
                    <Input
                      type="password"
                      onChange={(e) => onChangePassword(`${e.target.value}`)}
                      onKeyPress={handleKeyPress}
                    />
                  </InputGroup>
                  <br />
                  <Button onClick={onLogin}>Login</Button>
                </CardBody>
              </Card>
            </div>
          </Container>
        </Jumbotron>
      </main>
    </div>
  );
};

export default Main;
