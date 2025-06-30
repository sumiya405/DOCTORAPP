import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { FormikProps } from 'formik';

type Props = {
  value: string;
  name: string;
  formik: FormikProps<any>;
  variant?: string;
  label?: string;
  readOnly?: boolean;
};

const PrimaryPhoneInput: React.FC<Props> = ({
  value,
  name,
  formik,
  variant,
  label,
  readOnly,
}) => {
  const handleChange = (phone: string) => {
    formik.setFieldValue(name, phone);
  };

  return (
    <PhoneInput
      country={'in'}
      value={value}
      onChange={handleChange}
      inputProps={{
        name,
        readOnly,
      }}
      inputStyle={{
        width: '100%',
        height: '40px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        paddingLeft: '48px',
      }}
      specialLabel={label}
    />
  );
};

export default PrimaryPhoneInput;
