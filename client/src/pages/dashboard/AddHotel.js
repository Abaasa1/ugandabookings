import React from "react";
import Navbardash from "../../components/Navbardash";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

var kindOf = require("kind-of");

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  }
}

function AddHotel() {
  const FormikTextArea = (props) => (
    <textarea
      placeholder="Give us a short description about the location"
      className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
    ></textarea>
  );

  const DestinationImage = (props) => (
    <input
      type="file"
      placeholder="image"
      className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
    />
  );

  const initialDestination = {
    name: "",
    location: "",
    shortdescription: "",
    imageURL: "",
  };

  const validatedDestination = Yup.object().shape({
    name: Yup.string().required(),
    location: Yup.string().required(),
    shortdescription: Yup.string().required(),
    imageURL: Yup.mixed().required(),
  });

  const onSubmit = (data) => {
    console.log(data);

    alert(
      JSON.stringify(
        {
          fileName: data.file.name,
          type: data.file.type,
          size: `${data.file.size} bytes`,
        },
        null,
        2
      )
    );

    axios
      .post("http://localhost:3001/destinations", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbardash />
      <Formik
        initialValues={{
          name: "",
          location: "",
          shortdescription: "",
          file: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          console.log(kindOf(values));

          alert(
            JSON.stringify(
              {
                fileName: values.file.name,
                type: values.file.type,
                size: `${values.file.size} bytes`,
              },
              null,
              2
            )
          );

          const newvalues = {
            name: values.name,
            location: values.location,
            shortdescription: values.shortdescription,
            imageURL: values.file.name,
            file: values.file,
          };
          console.log(newvalues);
          axios
            .post("http://localhost:3001/destinations", newvalues)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          location: Yup.string().required(),
          shortdescription: Yup.string().required(),
          file: Yup.mixed().required(),
        })}
        render={({ values, handleSubmit, setFieldValue }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6 md:w-[70%] md:p-4 md:mx-auto"
            >
              <div className=" input-group bg-[#F0EFFF] p-2">
                <ErrorMessage name="name" component="span" />
                <Field
                  id="inputName"
                  placeholder="What is the name of your destination/hotel"
                  name="name"
                  className="w-[100%]  p-2 bg-[#F0EFFF] active:bg-[#F0EFFF]  pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className=" input-group bg-[#F0EFFF] p-2">
                <ErrorMessage name="location" component="span" />
                <Field
                  id="inputName"
                  name="location"
                  placeholder="Where is it located"
                  className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="form-group">
                <label for="file">File upload</label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div className=" input-group bg-[#F0EFFF] p-2">
                <ErrorMessage name="shortdescription" component="span" />
                <Field
                  id="inputName"
                  name="shortdescription"
                  as="textarea"
                  placeholder="Give us a short description about the location"
                  className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </div>
              <div className=" input-group align-middle w-[100%] justify-center items-center mx-auto">
                <button
                  className="w-[50%] mt-4 md:w-[100px] block mx-auto !bg-primary rounded-lg text-white p-2 text-center align-middle justify-center cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          );
        }}
      />

      {/*<Formik
        initialValues={initialDestination}
        onSubmit={onSubmit}
        validationSchema={validatedDestination}
      >
        <Form className="mt-8 space-y-6 md:w-[70%] md:p-4 md:mx-auto">
          <div className=" input-group bg-[#F0EFFF] p-2">
            <ErrorMessage name="name" component="span" />
            <Field
              id="inputName"
              placeholder="What is the name of your destination/hotel"
              name="name"
              className="w-[100%]  p-2 bg-[#F0EFFF] active:bg-[#F0EFFF]  pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className=" input-group bg-[#F0EFFF] p-2">
            <ErrorMessage name="location" component="span" />
            <Field
              id="inputName"
              name="location"
              placeholder="Where is it located"
              className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className=" input-group bg-[#F0EFFF] p-2">
            <ErrorMessage name="imageURL" component="span" />
            <input
              id="inputName"
              name="imageURL"
              type="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0]);
              }}
              className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className=" input-group bg-[#F0EFFF] p-2">
            <ErrorMessage name="shortdescription" component="span" />
            <Field
              id="inputName"
              name="shortdescription"
              as="textarea"
              placeholder="Give us a short description about the location"
              className="w-[100%] p-2 bg-[#F0EFFF] focus:bg-[#F0EFFF] active:bg-[#F0EFFF] pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className=" input-group align-middle w-[100%] justify-center items-center mx-auto">
            <button
              className="w-[50%] mt-4 md:w-[100px] block mx-auto !bg-primary rounded-lg text-white p-2 text-center align-middle justify-center cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
            </Formik>*/}
    </div>
  );
}

export default AddHotel;
