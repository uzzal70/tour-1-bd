import './AboutUs.css';
const AboutUs = () =>
{
    return (
        <div className="mt-5">
            <div className="container-fluid ">
                <div className="about-bg py-5 my-5 fw-bold text-warning">
                    <h3> </h3>
                    <h1>Tour 1 BD </h1>
                </div>

                <div className="row row-cols-md-2 row-cols-sm-2 row-cols-xs-1 g-4">
                    <div className="col text-start shadow">
                        <h1>Tour 1 BD </h1>
                        <p>Bangladesh has made great achievement in tourism sectors through development of security, infrastructure and communication of the country. In the last two years tourism sector of Bangladesh has risen by five steps globally. In 2021 the global position was 125th and this year the position has become 120th.
                            <br />
                            <br />
                            However, Bangladesh is still far behind in the global average index. This image has appeared in the Travel and Tourism Competitiveness Report 2019 of the World Economic Forum (WEF). The number of tourist arrival around the world is increasing every year. In 2018 more than 1.4 billion tourists arrived worldwide.
                            <br />
                            <br />
                            According to the report, total 140 countries have been ranked based on 90 criteria including ports and aviation infrastructure, security, culture, accommodation, financial quality and stable travel opportunities etc. In this, Bangladesh has made the most progress in security in the Asia-Pacific area through regional analysis. Bangladesh has ranked 105th in this index from the previous position 123rd. With improved on security, Bangladesh will be now very convenient for international tourists.</p>
                    </div>
                    <div className="col shadow"><img src="https://1.bp.blogspot.com/-TZUTQdKEsiQ/XXS0Gk-5a7I/AAAAAAAAapk/ZRTsIvZwdtc08HkjMe2Tc_q_WBdpboa0ACLcBGAs/s1600/beautiful-bangladesh.jpg" alt="" className="img-fluid shadow" /></div>

                </div>

            </div>

        </div>
    );
};

export default AboutUs;