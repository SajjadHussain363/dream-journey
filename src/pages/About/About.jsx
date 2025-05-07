import React from 'react';
import "./About.css";
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AwardWinning from '../../components/AwardWinning/AwardWinning';
import AboutImg from '../../assets/images/about/aboutUsSection.jfif';
import HappinsImg from '../../assets/images/about/happiness.png';
import whyChooseImg from "../../assets/images/about/whyChoose1.png";
import whyChooseImg2 from "../../assets/images/about/whyChoose2.png";
import whyChooseImg3 from "../../assets/images/about/whyChoose3.png";
import { Link } from 'react-router-dom';
import GetOffersDeals from '../../components/GetOffersDeals/GetOffersDeals';
import OurPartners from '../../components/OurPartners/OurPartners';




const About = () => {

    return (
        <div>
            <Header />
            <section className="seventyFive">
                <>
                    <div className="container">
                        <div className="spaceForHeader" />
                        <div className="cart-wrapper">
                            <div className="row aboutUsSection gx-md-5 gy-5">
                                <div className="col-xl-6 d-flex align-items-center flex-fill">
                                    <div>
                                        <div>
                                            <div className="cs_breadcrumb">
                                                <Link className="breadcrumb_parent" to="/">
                                                    Home
                                                </Link>{" "}
                                                - <span className="breadcrumb_child">About Us</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="xl_body_text pt-4">About Us</h1>
                                            <p className="special-tags">Who we are</p>
                                            <div className="body-sm-text ">
                                                Dream Journey Tourism is a leading premium tour operator in
                                                Dubai, specialising in providing unique and memorable
                                                experiences. Whether it is about finding the most fantastic
                                                hotel, riding on a camel down the red dunes, or embarking on the
                                                ultimate journey up high on a hot air balloon, a “Dream Journey”
                                                holiday is a combination of inspiration, personalisation, and
                                                memories.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 d-flex justify-content-center align-items-center flex-fill">
                                    <div className="aboutUsImgSection">
                                        <img src={AboutImg} alt="" />
                                        <div className="aboutImgBorder" />
                                        <div className="aboutImgBgColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='AboutAwardWinningWrapper'>
                        <AwardWinning style={{ padding: "50px", marginTop: "50px" }} className="AwardWinningFrBlgStyle" />
                    </div>
                    <div>
                        <div className="container wrapper reviewsReflectSection mt-5">
                            <div className="row gx-5 gy-4 ">
                                <div className="col-xl-7 order-xl-1 order-2 flex-fill">
                                    <img src={HappinsImg} alt="" className="w-100" />
                                </div>
                                <div className="col-xl-5 order-xl-2 order-1 flex-fill">
                                    <div className="heading_border">
                                        <h1 className="heading-primary">Reviews Reflect Happiness</h1>
                                    </div>
                                    <p className="paragraph-primary-sm  ">
                                        Genuine smiles paint our canvas as delighted customers share their
                                        happiness through positive social reviews.
                                    </p>
                                    <div className="row gy-3 " style={{ paddingTop: 64 }}>
                                        <div className="col-6 ">
                                            <div className="reviewsReflect p-3 text-center ">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,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"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ratingTags">4.7 / 5</div>
                                                <div className="reciewTags">11,172 Reviews</div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="reviewsReflect p-3 text-center ">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,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"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ratingTags">4.7 / 5</div>
                                                <div className="reciewTags">11,172 Reviews</div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="reviewsReflect p-3 text-center ">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,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"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ratingTags">4.7 / 5</div>
                                                <div className="reciewTags">11,172 Reviews</div>
                                            </div>
                                        </div>
                                        <div className="col-6 ">
                                            <div className="reviewsReflect p-3 text-center ">
                                                <div>
                                                    <img
                                                        src="data:image/png;base64,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"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ratingTags">4.7 / 5</div>
                                                <div className="reciewTags">11,172 Reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ReasonToBookWithUs_wrapper mt-5'>
                        <div className="bg-lightYellow">
                            <div className="container wrapper ">
                                <div className="heading_border">
                                    <h1 className="heading-primary">Reasons to book with us</h1>
                                </div>
                                <p className="paragraph-primary-sm  ">
                                    Here some awesome feedback from our travelers
                                </p>
                                <div className="bookReason">
                                    <div className="row gy-3 gx-md-5">
                                        <div className="col-md-6">
                                            <div
                                                className="d-flex align-items-center bookReasonItem"
                                                style={{ gap: 34 }}
                                            >
                                                <div className="">
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMtSURBVHgB7VhbUhpBFL3dozwiWMNfqiI4WYG4A9wB7CAUaJVf0RUEV2Dyq5LRFUhWAO6ArCATJFX5YyxRiSn65t4pUEMIzMuxKvFUwbz61pzu6Xv63AZ4xj8OARHh8nCloAnxlk51peAktXV+7CZOQgToHbzKa1I2UYgCCCmkJsz+YW7HTezdCPZMXU8MdB1cYpCw7UzZtue165kvjTjGmoD0slu5kdy2rJuPq02lUF+qdtbnxS/w382hUUClmhhT4Bax4XIbwF73So7vE7mvQoABLuAQTG5arasjo4Ri6HoENdQsmElO15kcIujyVq6PyXnFwvhkqWo1IETEVNqkgwGIJb/kGI+SJNf17L4AUaQJs7tUPQ/U8QUIGTf13DuacjtDUHvpSvc9BESoI8jSQeRqCtUHIleDEBAaQRZiKWGf8vUsVe260jg3CIUgy4mU8pROraQURQgRgQmOtY4U32atE2Vrrnh7QaAkCUvrZiEQwTgu8yph4PBxyDF8E2StI3J51rrUltUG7zCu67kvv91BsJXAVqpyvgtBCAbXOmwgTnV6ugSxQ4pwkd7s1viG08qZ6MPFfW4wGfFDuyw9dC0909DjSvUo8DhZ6ZQhZFwf5RrEau1FpfOar0dZnLDJp2XYqz38IYiLSQuWGHViqOAzhAxOOmK0Rkl3NyC+HLXj5xDzArFFPflDVgY/b/cy298t8IirevaU13AkgzFew/0liRBlUFhjh4yTjwBWF7XFMzo9Bg8YzeuiM6+r3VCd1f1LTIMzE/sH2Tee4ogcx13WV2qTzyKpSWZhnsEI3W55ARdTjsEQ0E5VphuMJyPI0hZTWhPYYAi58bd2T/KJvRiMyEfQq8GInGB8mD6lOWdIdV+GzkKkn9gxGKSdbDC41HUTE9kI+jUYdwT7dXfiSgu07bWUHGvdiFzNS6xDsM96BMJ0FSGcAmmD7FDLTfOro2yRtjm4mGr4qfQcgqmtb200jcxgAHO3PhIJkoZKZ6osDEg24nREgQZfs5yAcjrOxZQvaxb6/iA7HXIjBdryaJGZyI+1zm9JEHoWD4QokcadOJ4S4VMQcs/4L/ALhgd5HoeqPoEAAAAASUVORK5CYII="
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="small-heading">Instant/Easy Booking</h3>
                                                    <p className="small-black-paragraph">
                                                        The process of making reservations with Dream Journey is
                                                        seamless, and most booking confirmations are generated
                                                        instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="d-flex align-items-center bookReasonItem"
                                                style={{ gap: 34 }}
                                            >
                                                <div className="">
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQgSURBVHgB7ZhdUuNGEMe7ZyQDi5Myb1sVINoTxJxgzQlgTxCcj63ap/gGNjcwT1tFICYnWHMCzAlwThBlU6nKm12LCbuWZzrd8gcCG1uS7eVl/w8eSxpJP03P9HQ3wBfNJ4Q51arlcm6w7oFW+dFDCdqWqN1zOs2NYrsNcygVYOfYy6Pu7SGpfX5CfmpngqYFexkEverGm399WCbg9a+bBY1YBsTC4PZLa6mOqHwVQHPYz2jIaYScAZtXCveZ8mUflhqfgqCYBDQWoJhxxX5V5u4lAhCTHT1TqopFP5b5bmueZ6wpKPk4As8CVQN1fRjH/DMBW7Xn3gplLsIHkz1a104lLtgkUGvtAb+UPxb8T93u7qzRxJhwgFYV1372G7AAyRxWjn0nz50FibHgump37Y3vwwIlo0lkL2ZB4mQ4nnP09dWy4CZCqg87k+akmnRjuCBkzhn1allworWi76NRRf7rueEijCEx7X+n23R9ulmBhOocf5OHFOqcbFfDd7Ibe3htbARXzUqNG9/pOmeQQDcnW/tK66vbt54HCRVoVRH3pTWWpwLK6BFSwRo6TGpaYscMKbUhbsvCET+k8NAK9wBdkylJq41uwGdW11FVaQll57mTenDwkr385TIXxmOSUUTEhkK1B/eZ+mrVvFy48VuswxPJGDpHZhA3Nzw3Alzt9aMSAtuEJxIi+dK6Qc4bnhsBWjQhNZIzV/w2j9gLDAbHjBbKCHC4CrWBJwOcJAWLkulPjZ7TO4AFamGA2df/NGUVaqXKneOtA0ghEwShFa26s+Id4GAEAtek2q5EHxFfsSdoKo21m5Ptq9bb516S+zW6g3VA44CB6/rhCUIPUkp82bMf3u+wLy2igtxKJvPnzelWLS6opAjSSrI1BhhuNyRfT3swp7I//n3GecquJThCwAMGvYhjds539ogZomHXvTnIF89lP4w6yrSSUCr70/sSKvWCzd5Ghb9M6z+MA9gPX0bPO9EDl1S9B7bs9LK8J7crsAAJKDc7s/q51i1IqwOnGj0/FlHf/vbtBSfd+a768GLepDuuhukFv/cvnh6F6LVxN2PwkKlzsSPcBWjVZr6XCF539UGsG6ZFuItWi+M/eVfnZLM66fpERy0RLhvfZ6dbS+rLEsGJaR39jv/6km9DXMB+bKZ2ZYaKi1gG5MO09rFiwKNbXZhxRSDTJkSTJFMnbs49s/QRyV099lGVbrf3e5oqlSha4+FDP07OHbN45OVcYysKQZytL0lVYIJGXFABy9gs36tK4iGS1HgSld/C0bR0Fi2nWcJzicJlg9fGHb3QctBBvK8r5K0zUq5Di5UkNZ5UBcwQ1NgSZ2AFBPpuWl8C/IN/62RUPfvaT5xOzF0CJjb/R85nLEfkNEgbQhndXHd5nqUs1X3RovQ/9TQU1lh+c2kAAAAASUVORK5CYII="
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="small-heading">Instant/Easy Booking</h3>
                                                    <p className="small-black-paragraph">
                                                        The process of making reservations with Dream Journey is
                                                        seamless, and most booking confirmations are generated
                                                        instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="d-flex align-items-center bookReasonItem"
                                                style={{ gap: 34 }}
                                            >
                                                <div className="">
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ9SURBVHgB7VhdbhpJEK6qGf4Eyo7fIu2y7huYnMD4BGFPYJC1lvJk5wTGJ0jyFMlxFnICe08AOcGSE2S80Ur7ZlbrLCww3alqfowxMDOEOC98EhroaWq+/qmvvh6ADTbYYCkwasfrmuelu54Ha0A33W5vVdrtKH1xEZnE4FGZ0DwFRMVNCr4BDEAbjWlpDe/6Qb+59exvH8IIXp/9WEg6ToNveAbwA3AAjuRLMCAzGTUhnvClrY15BXGh0ZP4/PSCTACC2eFWXwfBL7nDv1oLCV7XHqukTv6BMjJNlcyvfnPRMzrn240ANeYOPhXhK9GpKWWMbhgDXq/XezI9kzTdMREkqpZcj/aWkVs3MhXfR6Q9yyHhHk/fu0MQEZ8ywWbmme/DA0NI8gy+Y6L70+0Tgje892Rf9I35Hb4X0LSEw82ZKoybJgSRSNkG7fhRYmnQ/8C6EWibIJoCNW6aEDQIQ42jQfnfNz8Vw2KR4xxnySnBGuEkElYlSMNEb93JTZ45TbpNSEec20f/neeb//f7lXnaJJA9AyEQyUoQlvv9wctFccIwmUHJ2uzBn1sZoi0NpsJCp1LJZEP2JqwAkayU61zIgCUOrAiabcCK32Ztq9u0R7uUF1JZICZSOlligVd2sFyJbs7yZVgB7qIbsoSdN6piSDek7LE8voQQyN5FoIKDsKMBSjz6ugy289v2Pjlw0jn/eVcbuOoNevWoS07LblqxNtAih2tyCHgwRYeoQQQvNMIe/+899OhU7gUDfM5rc8XtJSQ44SX/GHVV3LAOXIM/oMFdiAgDpp49+FSZbssd+iIfRSGVMo8a3KkwdEbhjoZgTZDZ5sGcImD589t8bV6fMTnZl1GrVShBzhPeT+YKIoBVoMp77JWQnK4Ggs/n+dKQHDyXfQkRsZSgDSqWKIA6RAVbM7n0E2177bxWyjZrbX+zPfMhBhYSFB1Dwhf81c8dRh8xD0iJd3QHuQKLfcMk9Ud7RbRJQQYVxIB7n5jnJXXuiAvisZGAPXoCMSDFXj6S0fzTN5r3pYP7jsGhWKNWMcLdEhQN46A1dgFq9Kj32MNyXOtFDlVNoNtam9bUzFdv3ubLPHuFrONWIQYmBHk5FV9keU5JUzPMsFod66a9WcEd1ejj2f5xEmM+QcNnDl4bE9BlZqhbS5EOfrjQCSOWa32OZsCrR+KsbhPp1m6Nsox1P7I54EBrOYaOoTGw8dC4t4ez8Rc5TY1Obiu5l3WAn18SDrmpFbwjM+MzwfXrxwoeGCJrRLjLhC6n2+8QdByyjkX820OSFAVJmaQ9do4Nxhj3Du5SosjVF+LlxMlwh5ZYpHsHd4PivD0ug6cQF6ODOyFsc9yCVCuJzwm6l5tJ0LmvPuQgHeigSEBldic79i3ANwCTuuK67bNmXmZdqotZnu0T+eWRqSmv210P0XSaXw7MIbPBBhusgC9aC9JhHogc3AAAAABJRU5ErkJggg=="
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="small-heading">Instant/Easy Booking</h3>
                                                    <p className="small-black-paragraph">
                                                        The process of making reservations with Dream Journey is
                                                        seamless, and most booking confirmations are generated
                                                        instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="d-flex align-items-center bookReasonItem"
                                                style={{ gap: 34 }}
                                            >
                                                <div className="">
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARVSURBVHgB7VhdUhtHEO6ekcAESElvqUoslhNYN2BzApwTgIJJlZ+CTwDcAJ5SFQwSJzCcAPkEJifIAk5V3qSKseWStN3pXlhZK2mWlWzBC1+VtNJsz8w3/Tc9A/CIRzwsMKvgh4OffIv4OyP60qkAE4ABmshcJ6Ldhd/+Oc/SJxPB1mFpWwbf0QlkllP5BCMHs7CmLJjg2DGbhwZWRMZjoJ35jfe78LUEWweez4bOCPl4Hu0WVoKmU/b10lmIhAsbV37amNdHT2uGcS0k+nlx8309TTYHdwF5W76DhV+v1p0THj6N3jFzwQAW9D8yNOdfXJ2Mku/IQmeYVq1FHbsOKTBpLxtVr8DIPjGdumSu//yxLKSq+hF7lKXJ09+I+Eb9dlSfolqBYB8Y/Ua1UJiY4JNuNKFoBk5cMursc8YUsW2W+z/almY+AyZ6l+sulCEFqSYOgcq6gm7uOjXibv2yCWPgcw7OZ0mDwCjBuksuVYMo5hXtnRcrzbEmzwI1swT8hUV4liY3pMGG+FTeRqsSgvhMUsZfMC0w1BnBj4Os0+7Uiy//DSCN4IwxOwi4ejuA+t8+TIufWAcR1qIAE+Rn8m/l4ffLDJlYUsNzdXICrtxwpEwZfxJYMNHYOpfOOSp/jvTBuZdBIPnW0993BcjXQAMl+sFc1jlHyTiDxCCuTCtAYkT5UM0MxnPJONOMbG1l8Y8gduCpAVlI4orz9ajGuDiAe4SreBgiGJOTFzUgcwzd0ZXLN0MOPEJa12iW4mFXdp8dcBHUvXeWqKHk5jYuK3CP+Pi6VBM2q23z33K/3yeCJN57u0THcM8wbGpaCNtw0U+09//RvVef00wtLsQpR+pEr789QTAu5aeZWlwo3hbCg8eJZJqRkly+g8HO1welLYO8OthOjKcLm5d7kIJx+mrxYBCWnARlT1wSM18MDmYiPZvhlCRl810Yp680NaQCK4KLoAvfbUQr3YMJME5fBhblYEKDCR+U3WPZMv4NDwZsSj5M+OBgkCwRwwU8FG6Os15/U4+gJukbGbj3CI4Rz91/kOr5YL7T8cBaNXMAGdH6w/OyyLlKqSEYKRzEjk8+K8GbVNcjaDFfkA1bIolTNairy4eLe3IcWBX5TFcgnw5LGgC1tvnwKi3HWrKBXBLIRtH14Dbd9QiGJtTzrBDMpRJUclIr6hXHvmg72/2KnH9lQeuztKia+cUpmBNSFMl7X5oGVxG6fbBR/cEzhGtRMfHicguyo/bxoBSgwW21wDg7VS9IVL36DHP03CWcp7wfyYRm7INUfFDPd79fd8mEFPr65L44SGT41tHSGcn5gEN+ZUNbHxyAZ+lMQ02S7zJMgE9HpXf6pG5YsWE+oUWa6a7JMraEULN//IG9GCsI/AYtVtnS8AzRMZTdPnQHmHhX72yMte8Gx8fImPgW27iebB8BvXLToBlsnzf2JO36LQtaVc+jEMqMYSIDqIvNbQZ1eMQ3xv/2cNajIVHa9QAAAABJRU5ErkJggg=="
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="small-heading">Instant/Easy Booking</h3>
                                                    <p className="small-black-paragraph">
                                                        The process of making reservations with Dream Journey is
                                                        seamless, and most booking confirmations are generated
                                                        instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="d-flex align-items-center bookReasonItem"
                                                style={{ gap: 34 }}
                                            >
                                                <div className="">
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOcSURBVHgB7ZhRTiJBEIaregBBl834ZrKRjG/7sgmeYOUE6gmUqA++yQnUE8izysKeYPUEegPZEzhRH/ZNoigITPdWIYMD0iMwo9lN+BMyZLqn6+up7qrqAZgomBBC0m3RNKMyuYIKKo1mszy7/ceGEBQKYO04tSYR8jSY2bllK6VyM5vXJxBQAgKK4RRCCRFslCIjHbFI064g4i9ug4AK9AZdOBqlnECRwaxd4fu3RcucUvIMFKTJ5euJzaufMKaGAqwefkkrRNN7Twj4jiD2+uFceSEBVN6R6rR/3OTWzTkEAbwtzllTKsZGLM3jJwmB2X44L2TMkXlyv87V9lOjkfHbUL6Ajz9SlwQHSomcoN3pbYtHoKwD61etaFnQ6p2kIxxLIO7y+NMbVwswqmpH1tJjIaXujudX4J30QGOzjeqhldb10e5iniFfo02jDO8koYy2BxS2TG0f+Mc1AQwqPaCCJb7U4xXtTrWstHbtuKoepXb4N6itTpGg83cJRgHkDEEhYI1iUGk2OxgwnU6b00m8/Ppt8Qw0qhVSuxTQD5SQAycyS2GKUuK5IcSuLi2KQXBu+ooLkQMfKcDfZOBUB0chbs8BuZ/cuNnTjVFHXGVbbHMQJOrgBqWvYTUsnCu/3I0vneasmIxdcFXykXD9kIrSakPcLbhLq+vimBNNcz0nWyL70XCs9np0RI4Zos1kN3t1Acm1nYXchHEUBM6Vo5rtFyPFS97vAjaFcUIGKiJiFLl8hxEUBhzbZNvM4E2vXUB+xQpUjhfqlPp8NixkWHBsk20zQ2Lbtt22V+VWtTC/LgCLvJOf8C6ji4PDwHGAFqiWn4z7Vd04XjgJKvtp47rkbX8VB7kDd+QH6JS2C2PCsQwDl6kS15ZSrKiTzOvgfPVwlNrjWk3namrbqRYGpzCvFIUPXRuHNrZBvwNdn4h2YKFsJD/H6wz42j1UBedhCPmFrHgrblEaBEfKU12fSbkVVP8voCENm6/NqOO7C4PIPff4SXvs7CTvCz4W0iLORloR29vOhaxfjOwdyzSfN9uLJE0cBR68dez0PRfzeVY9l0HWoHaK+qWGuM/5BeGYTBYpGuiOrjY2RMabOUYC7ILSGbnfHahwqf3FQJNxetMX7NNkbG87L6HEln3+lu1AH490afGt9DWKAn8f9ELKlpOl5AUiIothwIUC2APZEZdMXJUEhWOF9gmYN5R0aL2hY85QbTluVT5R2PoLX2QQmN4SNyIAAAAASUVORK5CYII="
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="small-heading">Instant/Easy Booking</h3>
                                                    <p className="small-black-paragraph">
                                                        The process of making reservations with Dream Journey is
                                                        seamless, and most booking confirmations are generated
                                                        instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="d-flex align-items-center bookReasonItem"
                                                style={{ gap: 34 }}
                                            >
                                                <div className="">
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARuSURBVHgB7VhRbhpJEK3qnhiBJ178F2kDmj3B4hMEnyDsCQImsZSvxCcwPgHOV6S1MfgEJidg9gThBjuxEyl/IAVjOWa6UjWBBAMDY3uIf/KkUTND9/Dorn71qgF+425AWDI69XTaGtg5VOiAb9r29qf2TcYvleD5YabAxKpA4IyeEZjKavnjXtR3KFgCZNb6tUwVEU/4totGbeJX9ZcheIOgKl8OHuejvsta1OHireMMrAFfvfZ6qdtd1L/z75+5BGkh5hgyb+zyx9c/iTuVhDGvmGSOb12IgFCCMgsJ/+EJoclrnmht1qB/uNbmWTi+Gnxtrr/87E2O6R1kX6OCXV7HYNbsF6fu+PfrJa97Xst2AY0DERFKMGEe7gJingD2lFGuDyanFBYUUjWxslLtH2YDshxTQdBrRO4PeQ7rZlJhCcvezNnmoE8DqYUrsZAgUEDu3erz08rwicvX/kXdcXzj5xWqopAdhTH37fK1Y5c/7EOMsML5wboimJKEZMnzuGnIJWRhwLGGkE5pcLHkRZ6ZOxMEojbxEsMcDMl6sESEygwRutw4sovhHhFK8MpSDWlZYopwjwglKJLAQutqjU/gHjE3kxif/pPdLJoIMUH+NGp4GrX/XIJquMwPBmtFiAs+7rEm5fpHmVbn7SNnUfe5BGWXsrZ90Ah/Q0xIvvBcbnZ4E+ZY8FuL8nIUs/AHxIxU+XRfKbUhaUUr1TqvPd4N6zuXYJBbOTX5hmMxZsjqXKLaGDkcdj8ns2I91A+KK1nRuoUIXmrrdAOWiH4tK46nCkhuautsc/y7mTPYqT9yEpY+QfFyl+ofWDJkybnZEcWYjEk1TY5tFq20JPuzydxMvgzS2dIxJMmEVH78+VQuFg/IC+8YX23Yv4icQOJdWiLyxp9fI3hRy+7yxOWN2KZt70bFzW0hS8rizdYNnvGtZ2+fNSCMIFusIhI07OF0LwOjKs9C9YxtWkFUYugl91JKTf3uD4IXB06eyDgDY45hCQhqFaWqZJBLUEjzKnU5zt8hqUbSgnaYl7TGPnnAo7hMlDzpQowYSRbPEisJHDOpZup7RlmIazrYO8o0FGEQCzAerIiONPwD6aCmCG7Ivby6Ks0qnibRP8r+L4OTnD1u6rqnhLpXy3AcYoED94eqj3aW6CJJxcYWn/XgKX9Ok+9vzjst6PHsKa3fszMqTW6AKJiSGbscvKSxaCDXIxzQpoWWrvNteKZBnZdG+9qFW+DWJwuSS9FXJbFOLBWVsH5cjspMt2cJfhSfeaejj+/WCZvsTF6FeTtC4vLVTJkNUY2EWevMczJ3JijgXb8jbSLxoD6LhLQGggLsGuTPGaRjcTK3tltRECw1i6wkejnNGv/OR78YtPqLO2usvXVWjEIyFrCUvOdzl85oqcURibxw+qwvGivyxpaLZpGM7XxQThk4EwUuiAyLsRRGvIHk2C2KIxpp8OT5YawHmAFJQw2m+ISCVEal1ednzajjRyQDJ/WLzMqNcX7oFOA3YsQ3E6zxSWoat94AAAAASUVORK5CYII="
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="small-heading">Instant/Easy Booking</h3>
                                                    <p className="small-black-paragraph">
                                                        The process of making reservations with Dream Journey is
                                                        seamless, and most booking confirmations are generated
                                                        instantly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mainWrpr'>

                        <div className="container wrapper py-5">
                            <div className="heading_border">
                                <h1 className="heading-primary">Founding Principles</h1>
                            </div>
                        </div>
                        <div>
                            <div className="container wrapper pb-0 whyChooseBox">
                                <div className="whyChooseImageBox">
                                    <div className="row gx-4 gy-2 ">
                                        <div className="col-xl-8 col-md-6 order-md-1 order-2">
                                            <div>
                                                <div className="whyChooseNumber d-md-block d-flex align-items-center justify-content-between justify-content-sm-start">
                                                    <h1>01</h1>
                                                    <div className="position-relative">
                                                        <p className=" ">Get Started</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div className="whyChooseContent">
                                                        <h1 className="heading-primary-sm ">
                                                            Planning that matters!
                                                        </h1>
                                                        <p className="paragraph-primary-sm pt-sm-0 pt-3">
                                                            Our expertise stems from careful planning which allows us to
                                                            render exceptional services. We have hand-selected the
                                                            exciting services we provide with prime focus on delivering
                                                            the best solutions to satisfy our customers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 order-md-2 order-1">
                                            <div className="whyChooseImg">
                                                <img src={whyChooseImg} alt="whyChooseImg" className="img-fluid" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-4 gy-2 mt-5">
                                        <div className="col-xl-4 col-md-6  ">
                                            <div className="whyChooseImg">
                                                <img src={whyChooseImg2} alt="whyChooseImg2" className="img-fluid" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-md-6 ">
                                            <div>
                                                <div className="whyChooseNumber d-md-block d-flex align-items-center justify-content-between justify-content-sm-start">
                                                    <h1>02</h1>
                                                    <div className="position-relative">
                                                        <p className=" ">Make The Most</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div className="whyChooseContent">
                                                        <h1 className="heading-primary-sm ">
                                                            Planning that matters!
                                                        </h1>
                                                        <p className="paragraph-primary-sm pt-sm-0 pt-3">
                                                            Our expertise stems from careful planning which allows us to
                                                            render exceptional services. We have hand-selected the
                                                            exciting services we provide with prime focus on delivering
                                                            the best solutions to satisfy our customers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-4 gy-2 mt-5">
                                        <div className="col-xl-8 col-md-6 order-md-1 order-2">
                                            <div>
                                                <div className="whyChooseNumber d-md-block d-flex align-items-center justify-content-between justify-content-sm-start">
                                                    <h1>03</h1>
                                                    <div className="position-relative">
                                                        <p className=" ">Cherish The Moment</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div className="whyChooseContent">
                                                        <h1 className="heading-primary-sm ">
                                                            Planning that matters!
                                                        </h1>
                                                        <p className="paragraph-primary-sm pt-sm-0 pt-3">
                                                            Our expertise stems from careful planning which allows us to
                                                            render exceptional services. We have hand-selected the
                                                            exciting services we provide with prime focus on delivering
                                                            the best solutions to satisfy our customers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6  order-md-2 order-1">
                                            <div className="whyChooseImg">
                                                <img src={whyChooseImg3} alt="whyChooseImg3" className="img-fluid" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>

                </>
                <OurPartners />

            </section>
            <GetOffersDeals />
            <Footer />
        </div>
    );
};
export default About;
