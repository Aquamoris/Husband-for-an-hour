import * as React from 'react';
import styles from './SmallForm.module.scss';
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
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/, 'Введите корректный номер телефона')
        .required('Поле телефон обязательно к заполнению')
});

const SmallForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const initialValues: MyFormValues = {
        name: '',
        phone: '',
    };

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

                        alert('Ваша заявка успешно отправлена!')
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

export default SmallForm;