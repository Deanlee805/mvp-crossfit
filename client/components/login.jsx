import React, { Component } from "react";
import firebase from "firebase";
import firebaseui from "firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import logo from "../../public/CFweightlifting.png";

const config = {
  apiKey: "",
  authDomain: "mvp-crossfit.firebaseapp.com",
  databaseURL: "https://mvp-crossfit.firebaseio.com",
  projectId: "mvp-crossfit",
  storageBucket: "mvp-crossfit.appspot.com",
  messagingSenderId: "74764818365"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/#/wod",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

class SignInScreen extends React.Component {
  render() {
    return (
      <div
        className="container"
        style={{
          marginTop: "100px"
        }}
      >
        <img
          src={logo}
          style={{
            height: "200px",
            width: "200px",
            margin: "auto",
            marginBottom: "10px",
            display: "grid",
            textAlign: "center"
          }}
        />
        <p
          style={{
            margin: "auto",
            display: "grid",
            textAlign: "center"
          }}
        >
          Please sign-in:
        </p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
          uiCallback={() =>
            firebase.auth().onAuthStateChanged(user => {
              console.log(user.displayName);
            })
          }
        />
      </div>
    );
  }
}

// const SignInScreen = props => {
//   return (
//     <div
//       className="container"
//       style={{
//         marginTop: "100px"
//       }}
//     >
//       <img
//         src={logo}
//         style={{
//           height: "200px",
//           width: "200px",
//           margin: "auto",
//           marginBottom: "10px",
//           display: "grid",
//           textAlign: "center"
//         }}
//       />
//       <p
//         style={{
//           margin: "auto",
//           display: "grid",
//           textAlign: "center"
//         }}
//       >
//         Please sign-in:
//       </p>
//       <StyledFirebaseAuth
//         uiConfig={uiConfig}
//         firebaseAuth={firebase.auth()}
//         // uiCallback={() =>
//         //   firebase.auth().onAuthStateChanged(user => {
//         //     console.log(user.displayName);
//         //     // this does not work for some reason => seems to be calling recursively?
//         //     // props.onLogin(user.displayName);
//         //   })
//         // }
//       />
//     </div>
//   );
// };

export default SignInScreen;
