import * as React from 'react';
import styles from './MainForm.module.scss';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import * as Yup from 'yup';
import {useState} from "react";
import {sendRequest} from "../api/telegram.api";

interface MyFormValues {
    name: string;
    phone: string;
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Введите настоящее имя')
        .required('Поле имя обязательно к заполнению'),
    phone: Yup.string()
        .matches(/^8\d+$/, 'Введите действительный номер телефона')
        .max(11, 'Введите действительный номер телефона')
        .min(11, 'Введите действительный номер телефона')
        .required('Поле телефон обязательно к заполнению')
});

const MainForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [phoneNumber, setPhoneNumber] = useState('+7');

    const initialValues: MyFormValues = {
        name: '',
        phone: '',
    };

    // const phoneHandler = (e: React.FormEvent<HTMLInputElement>) => {
    //     const value = e.currentTarget.value.trim();
    //
    //     if (value.length < 2) {
    //         setPhoneNumber('+7');
    //     } else if (value.length > 12) {
    //         return
    //     } else if (Number.isNaN(Number(value))) {
    //         return;
    //     } else {
    //         setPhoneNumber(value);
    //     }
    // };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Оставить заявку</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={ async (values, actions) => {

                    try {
                        setIsLoading(true);

                        const message = `Муж на час | Новая заявка | Имя: ${values.name} | Телефон: ${values.phone}`;

                        await sendRequest(message);

                    }
                    catch (e) {

                    }
                    finally {
                        setIsLoading(false);

                        actions.setSubmitting(false);
                        actions.resetForm();
                    }

                }}
            >
                {({ errors, touched }) => (
                <Form className={styles.formWrapper}>
                    <label className={styles.label} htmlFor="name">Имя</label>
                    <Field className={styles.input} id="name" name="name" placeholder="Иван" />
                    {errors.name && touched.name ? (<div className={styles.error}>{errors.name}</div>) : null}

                    <label className={styles.label} htmlFor="phone">Телефон</label>
                    <Field className={styles.input} type="number" id="phone" name="phone" placeholder="89123456789" />
                    {errors.phone && touched.phone ? (<div className={styles.error}>{errors.phone}</div>) : null}

                    <button className={styles.button} type="submit" disabled={isLoading}>Отправить</button>
                </Form>
                )}
            </Formik>
        </div>
    );
};

export default MainForm;