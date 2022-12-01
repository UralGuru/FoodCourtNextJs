import {FC} from 'react';
import React, {useState, useEffect} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {AiOutlineGoogle} from 'react-icons/ai';
import {BsEye, BsEyeSlash} from 'react-icons/bs';

// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../slices/authSlice";
// import { clearMessage } from "../slices/messageSlice";
import s from "./auth.module.scss"
import {registerType} from "../../constants/types";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage, register} from "../../store/slices/authSlice";
import {log} from "util";

export default function RegisterPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth);

    const [loading, setLoading] = useState(false);
    const [pswView, setPswView] = useState(false);

    useEffect(() => {
        // @ts-ignore
        dispatch(clearMessage());
    }, [dispatch]);

    const initialValues: registerType = {
        name: "",
        email: "",
        phone: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Введите имя"),
        phone: Yup.string().required("Введите телефон"),
        email: Yup.string().email("Некорректный ввод").required("Введите логин"),
        password: Yup.string().required("Придумайте пароль"),
    });

    const handleLogin = (formValue: registerType) => {
        setLoading(true);
        // @ts-ignore
        dispatch(register(formValue))
            .unwrap()
            // .then(() => {
            //     navigate("/profile");
            // })
            .catch(() => {
                setLoading(false);
            });
    };
    // if (isLoggedIn) {
    //     return <Navigate to="/profile" />;
    // }

    if (user.isLoggedIn) {
        return router.push('/')
    }


    return (
        <>
            <div className={s.header}>Регистрация</div>
            <div className={s.pageContent}>

                <div className={s.auth}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({errors, touched}) => (
                            <Form>

                                {/* NAME */}
                                <div className={s.label}>
                                    <label htmlFor="name" className={s.labelText}>Имя</label>
                                    <div>
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            className={
                                                s.labelInput +
                                                (errors.email && touched.email ? " is-invalid" : "")
                                            }
                                        />
                                    </div>
                                    <div className={s.errorMsg}><ErrorMessage name="name" component="div"/></div>
                                </div>

                                {/* PHONE */}
                                <div className={s.label}>
                                    <label htmlFor="phone" className={s.labelText}>Телефон</label>
                                    <div>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            className={
                                                s.labelInput +
                                                (errors.email && touched.email ? " is-invalid" : "")
                                            }
                                        />
                                    </div>
                                    <div className={s.errorMsg}><ErrorMessage name="phone" component="div"/></div>
                                </div>

                                {/* LOGIN */}
                                <div className={s.label}>
                                    <label htmlFor="email" className={s.labelText}>Логин</label>
                                    <div>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="text"
                                            className={
                                                s.labelInput +
                                                (errors.email && touched.email ? " is-invalid" : "")
                                            }
                                        />
                                    </div>

                                    <div className={s.errorMsg}><ErrorMessage name="email" component="div"/></div>

                                </div>

                                {/* PASSWORD */}
                                <div className={s.label}>
                                    <label htmlFor="password" className={s.labelText}>Пароль</label>
                                    <div>
                                        <Field
                                            id="password"
                                            name="password"
                                            type={pswView ? "text" : "password"}
                                            autoComplete="on"

                                            className={
                                                s.labelInput +
                                                (errors.password && touched.password ? " is-invalid" : "")
                                            }
                                        />
                                        <span className={s.eyeContainer} onClick={() => setPswView(!pswView)}>
                                    <span className={s.eye}>
                                        {pswView
                                            ? <BsEye style={{fontSize: 20}}/>
                                            : <BsEyeSlash style={{fontSize: 20}}/>}
                                    </span>

                                </span>

                                    </div>

                                    <div className={s.errorMsg}><ErrorMessage name="password" component="div"/></div>
                                </div>


                                {user.message && (
                                    <div className={s.errorBlock}>
                                        <div className={s.errorMsg}>
                                            {user.message === 'User did not created'
                                                ? "Пользователь не создан"
                                                : user.isSuccess
                                                    ? "Успешная регистрация"
                                                    : user.message
                                            }


                                        </div>
                                    </div>
                                )}

                                {/* SUBMIT */}
                                <div>
                                    <button
                                        type="submit"
                                        className={s.button}
                                        // disabled={loading}
                                    >
                                        {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                                        <div>Зарегистрироваться</div>
                                    </button>
                                </div>


                            </Form>
                        )}
                    </Formik>

                    <div className={s.textGroupBetweenBtn}>
                        <div className={s.textBetweenBtn}>Или зарегистрируйтесь с помощью</div>
                    </div>


                    {/* SUBMIT WIDTH GOOFLE*/}
                    <div>
                        <button
                            className={`${s.button} ${s.buttonGoogle}`}
                            // disabled={loading}
                            onClick={() => console.log('Google')}
                        >
                            <AiOutlineGoogle style={{fontSize: 25, marginRight: 5}}/>
                            <div>Google</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
};
