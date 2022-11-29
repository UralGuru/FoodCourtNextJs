import {FC} from 'react';
import React, {useState, useEffect} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {AiOutlineGoogle} from 'react-icons/ai';
import {BsEye, BsEyeSlash} from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

import { login } from "../../store/slices/authSlice";
import { clearMessage } from "../../store/slices/authSlice";
import s from "./auth.module.scss"
import {AuthStateType, loginType} from "../../constants/types";
import AuthService from "../../services/auth.service";
import Link from "next/link";

export default function LoginPage(){
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth);
    const [loading, setLoading] = useState(false);
    const [pswView, setPswView] = useState(false);

    useEffect(() => {
        // @ts-ignore
        dispatch(clearMessage());
    }, [dispatch]);

    const initialValues: loginType = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Некорректный ввод").required("Введите логин"),
        password: Yup.string().required("Введите пароль"),
    });

    const handleLogin = (formValue: loginType) => {
        setLoading(true);

        // @ts-ignore
        dispatch(login(formValue))
            .unwrap()
            // .then(() => {
            //     navigate("/profile");
            // })
            .catch(() => {
                setLoading(false);
            });
    };

    if (user.isLoggedIn) {
        return router.push('/')
    }


    return (
        <>
            <div className={s.header}>Вход</div>
            <div className={s.pageContent}>
                <div className={s.auth}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({errors, touched}) => (
                            <Form>
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
                                            {(user.message === 'User has been successfully authenticated')
                                                ? 'Успешная авторизация ;)'
                                                : ((~(user.message).indexOf('User with email') || ~(user.message).indexOf('Invalid password'))
                                                    ? 'Неверный логин или пароль'
                                                    : user.message)
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
                                        <div>Войти</div>
                                    </button>
                                </div>


                            </Form>
                        )}
                    </Formik>
                    <div className={s.textGroupBetweenBtn}>
                        <div className={s.textBetweenBtn}>Или войдите с помощью</div>
                    </div>


                    {/* SUBMIT WIDTH GOOFLE*/}
                    <div>
                        <button
                            className={`${s.button} ${s.buttonGoogle}`}
                            // disabled={loading}
                            // onClick={() => AuthService.loginWidthGoogle()}
                            onClick={() => console.log("Auth width Google")}
                        >
                            <AiOutlineGoogle style={{fontSize: 25, marginRight: 5}}/>
                            <div>Google</div>
                        </button>
                    </div>

                    <div className={s.regText}>Все еще нет аккаунта? Создай его
                        <Link href="./register">здесь</Link>

                    </div>
                </div>
            </div>
        </>


    );
};
