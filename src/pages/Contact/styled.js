import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ContactArea = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primaryDarkColor};
`;

export const Contacts = styled.div`
  width: 60%;
  height: 80%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormContatos = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const LabelForm = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const PhoneInputContainer = styled.div`
  width: 100%;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: #3498db;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export const H2Title = styled.h2`
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
