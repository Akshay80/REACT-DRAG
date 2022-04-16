import React from "react";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Youtube } from "../images/youtube.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
import { ReactComponent as Linkdin } from "../images/linkdin.svg";
import NewLogo from "../images/logoNew.png"

export default function Footer() {
    return (
        <>
            <footer class="pt-4 pt-md-5 border-top">
                <div className="container">
                    <div class="row mx-auto">
                        <div class="col-sm-12 col-md-2">
                            <img
                                class="mb-2 footerLogo"
                                src={NewLogo}
                                alt=""
                                width="150"
                            />
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <h4>Features</h4>
                            <ul class="list-unstyled text-small">
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Cool stuff
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Random feature
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Team feature
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Stuff for developers
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Another one
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Last time
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <h4>Resources</h4>
                            <ul class="list-unstyled text-small">
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Resource
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Resource name
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Another resource
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Final resource
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            <h4>About</h4>
                            <ul class="list-unstyled text-small">
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Team
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Locations
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Privacy
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a class="link-secondary text-decoration-none" href="#">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-md-3">
                            <div className="footerLast">
                                <p className="text-light">
                                    Subscribe to stay tuned for news and latest updates
                                </p>

                                <div class="input-group mb-3 py-3">
                                    <input type="text" class="form-control" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon2"/>
                                        <span class="input-group-text bg-danger border-none" id="basic-addon2"><Arrow/></span>
                                </div>
                                <div className="iconWrapper">
                                <Facebook></Facebook>
                                <Youtube></Youtube>
                                <Twitter></Twitter>
                                <Linkdin></Linkdin>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
