import emailjs from 'emailjs-com';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import {
  ContactArea,
  Contacts,
  Container,
  FormContatos,
  FormGroup,
  H2Title,
  InputForm,
  LabelForm,
  PhoneInputContainer,
  SubmitButton,
  TextArea,
} from './styled';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_isxss0c', 'template_4f5jifa', e.target, 'pHPSNM_GLwzfehnxe')

      .then(
        (result) => {
          // eslint-disable-next-line no-alert
          alert('Mensagem enviada com sucesso! 👍');
        },
        (error) => {
          // eslint-disable-next-line no-alert
          alert(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <ContactArea id="contact">
      <Container>
        <Contacts>
          <H2Title>
            Estou à disposição para trabalharmos juntos ou esclarecer qualquer dúvida. Envie-me suas
            perguntas ou curiosidades.
          </H2Title>
          <FormContatos onSubmit={sendEmail}>
            <FormGroup>
              <LabelForm>Nome: </LabelForm>
              <InputForm type="text" required placeholder="Seu nome" name="name" />
            </FormGroup>
            <FormGroup>
              <LabelForm>E-mail: </LabelForm>
              <InputForm type="email" required placeholder="Seu email" name="email" />
            </FormGroup>
            <FormGroup>
              <LabelForm>Telefone: </LabelForm>
              <PhoneInputContainer>
                <PhoneInput
                  country="br"
                  inputProps={{
                    name: 'phone',
                    required: false,
                  }}
                />
              </PhoneInputContainer>
            </FormGroup>
            <FormGroup>
              <LabelForm />
              <TextArea cols="30" rows="8" required placeholder="Sua mensagem" name="message" />
            </FormGroup>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </FormContatos>
        </Contacts>
      </Container>
    </ContactArea>
  );
}
