import {
  VStack,
  Textarea,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const Form = () => {
  const { isLoading, response, submit } = useSubmit();
  //const { onOpen } = useAlertContext();
  const getbookingdate = () => {
    let date = new Date();
  };
  return (
    <Formik
      initialValues={{ date: "", time: "", NumberOfGuests: "", Occasion: "" }}
      validationSchema={Yup.object({
        date: Yup.string().required("Required"),
        time: Yup.string().option,
        NumberOfGuests: Yup.number().required("Required").min(1).max(10),

        Occasion: Yup.string().option,
      })}
      onSubmit={(values, actions) => {
        submit("http://localhost:3000/", values);
        //onOpen(response.type, response.message);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as="form"
          w="1024px"
          p={32}
          alignItems="flex-start"
          onSubmit={formik.handleSubmit}
        >
          <Heading as="h1" id="contactme-section">
            Booking Form
          </Heading>

          <FormControl isInvalid={formik.errors.date && formik.touched.date}>
            <FormLabel>Date</FormLabel>
            <Field as={Input} name="date" type="date" />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.time && formik.touched.time}>
            <FormLabel>Time</FormLabel>
            <Field as={Select} name="time" id="time">
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </Field>
            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              formik.errors.NumberOfGuests && formik.touched.NumberOfGuests
            }
          >
            <FormLabel>NumberOfGuests:</FormLabel>
            <Field as={Input} name="NumberOfGuests" type="number" />
            <FormErrorMessage>{formik.errors.NumberOfGuests}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.occasion && formik.touched.occasion}
          >
            <FormLabel>Occasion</FormLabel>
            <Field as={Select} name="occasion" id="occasion" color="grey.800">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            variant="solid"
            colorScheme="purple"
            width="full"
          >
            Submit
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default Form;
