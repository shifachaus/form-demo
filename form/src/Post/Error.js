export default function Error({ name, designation, mobile, email }) {
  let error = {};

  if (!name) {
    error.name = "name must be 4 character long ";
  }

  if (!designation) {
    error.designation = "Designation field is required";
  }

  if (mobile.length < 10) {
    error.mobile = "Mobile number must be 10 digit long";
  }

  if (!email) {
    error.email = "Email is required";
  } else if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    error.username = "Invalid email id";
  }

  return error;
}
