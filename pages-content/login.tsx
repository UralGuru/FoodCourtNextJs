import {FC} from 'react';
import React, {useState, useEffect} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../slices/authSlice";
// import { clearMessage } from "../slices/messageSlice";
import s from "./auth.module.scss"
import {loginType} from "../constants/types";

export const LoginPage: FC = () => {
    // let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [pswView, setPswView] = useState(false);

    // const { isLoggedIn } = useSelector((state) => state.auth);
    // const { message } = useSelector((state) => state.message);
    //
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(clearMessage());
    // }, [dispatch]);

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Некорректный ввод").required("Введите логин"),
        password: Yup.string().required("Введите пароль"),
    });

    const handleLogin = (formValue: loginType) => {
        console.log(formValue);
        setLoading(true);

        // dispatch(login({email, password}))
        //     .unwrap()
        //     .then(() => {
        //         navigate("/profile");
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    };
    // if (isLoggedIn) {
    //     return <Navigate to="/profile" />;
    // } 
    
    


    return (
        <div className={s.pageContent}>
            <div className={s.auth}>
            <div className={s.header}>Вход</div>
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
                                <span className={s.eyeContainer} onClick={()=>setPswView(!pswView)}>
                                    <span className={s.eye}>
                                        {pswView
                                            ? <BsEye style={{fontSize: 20}}/>
                                            : <BsEyeSlash style={{fontSize: 20}}/>}
                                    </span>

                                </span>

                            </div>

                            <div className={s.errorMsg}><ErrorMessage name="password" component="div"/></div>
                        </div>

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
                        className={`${s.button} ${s.buttonGoogle}` }
                        // disabled={loading}
                        onClick={()=>console.log('Google')}
                    >
                        <AiOutlineGoogle style={{fontSize: 25, marginRight: 5}}/>
                        <div>Google</div>
                    </button>
                </div>

                <div className={s.regText}>Все еще нет аккаунта? Создай его <span>здесь</span></div>


                {/*{message && (*/}
                {/*    <div className="form-group">*/}
                {/*        <div className="alert alert-danger" role="alert">*/}
                {/*            {message}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
        </div>
        </div>
        
    );
};
