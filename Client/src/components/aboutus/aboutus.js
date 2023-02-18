import React from 'react'
import 'react-bootstrap'
import './aboutus.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../homepage/home'

function Aboutus() {
    return (
        <>
            <div class="container">
                
                <div class="row  ">
                    <div class="col-12 col-sm-12" >
                        <h3>About Us</h3>
                        <hr />
                    </div>
                </div>

                <div class="row row-content">
                    <div class="col-12 col-sm-6">
                        <h2>Our History</h2>
                        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                    </div>
                    <div class="col-sm">
                        <div class="card">
                            <h3 class="card-header bg-dark text-white">Facts At a Glance </h3>
                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-6">Started</dt>
                                    <dd class="col-6">3 Feb. 2013</dd>
                                    <dt class="col-6">Major Stake Holder</dt>
                                    <dd class="col-6">HK Fine Foods Inc.</dd>
                                    <dt class="col-6">Last Year's Turnover</dt>
                                    <dd class="col-6">$1,250,375</dd>
                                    <dt class="col-6">Employees</dt>
                                    <dd class="col-6">40</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card card-body bg-light">
                        <blockquote class="blockquote">
                            <p class="mb-0">You better cut the pizza in four pieces.
                                Because I'm not hungry enough to eat six.
                            </p>
                            <footer class="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of
                                    Yogi Berra, P. Pepe, Diversion Books, 2014
                                </cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>


                <div class="row row-content">
                    <div class="col-12 col-sm-12">
                        <h2>Corporate Leadership</h2>
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" role="tab" id="peterhead">
                                    <h3 class="mb-0">
                                        <a data-toggle="collapse" data-target="#peter">
                                            Peter Pan <small>Chief Epicurious Officer</small>
                                        </a>
                                    </h3>
                                </div>
                                <div class="collapse show" id="peter" data-parent="#accordion">
                                    <div class="card-body">
                                        <p class="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" role="tab" id="dannyhead">
                                    <h3 class="mb-0">
                                        <a class="collapsed" data-toggle="collapse" data-target="#danny">
                                            Dhanasekaran Witherspoon <small>Chief Food Officer</small>
                                        </a>
                                    </h3>
                                </div>
                                <div class="collapse" id="danny" data-parent="#accordion">
                                    <div class="card-body">
                                        <p class="d-none d-sm-block">Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, <em>Everything that runs, wins, and everything that stays, pays!</em></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" role="tab" id="agumbehead">
                                    <h3 class="mb-0">
                                        <a class="collapsed" data-toggle="collapse" data-target="#agumbe">
                                            Agumbe Tang <small>Chief Taste Officer</small>
                                        </a>
                                    </h3>
                                </div>
                                <div class="collapse" id="agumbe" data-parent="#accordion">
                                    <div class="card-body">
                                        <p class="d-none d-sm-block">Blessed with the most discerning gustatory sense, Agumbe, our CTO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, <em>You click only if you survive my lick.</em></p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" role="tab" id="albertohead">
                                    <h3 class="mb-0">
                                        <a class="collapsed" data-toggle="collapse" data-target="#alberto">
                                            Alberto Somayya <small>Executive Chef</small>
                                        </a>
                                    </h3>
                                </div>
                                <div class="collapse" id="alberto" data-parent="#accordion">
                                    <div class="card-body">
                                        <p class="d-none d-sm-block">Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, <em>Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-content">
                        <div class="col-12 col-sm-9">
                            <h2>Facts &amp; Figures</h2>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th>2013</th>
                                            <th>2014</th>
                                            <th>2015</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Employees</th>
                                            <th>15</th>
                                            <th>30</th>
                                            <th>40</th>
                                        </tr>
                                        <tr>
                                            <th>Guests Served</th>
                                            <th>15000</th>
                                            <th>45000</th>
                                            <th>100000</th>
                                        </tr>
                                        <tr>
                                            <th>Special Events</th>
                                            <th>3</th>
                                            <th>20</th>
                                            <th>15</th>
                                        </tr>
                                        <tr>
                                            <th>Annual Turnover</th>
                                            <th>$251,325</th>
                                            <th>$1,250,375</th>
                                            <th>$3,000,000</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-12 col-sm-3">

                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )

}

export default Aboutus