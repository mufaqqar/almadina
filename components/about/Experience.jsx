import Link from "next/link";

export default function Experience() {
  return (
    <div className="row-experiences padding-bottom-682">
      <div className="container">
        <div className="row-experiences-content wow zoomInDown">
          <div className="row">
            <h1 className="heading-experiences">EXPERIENCED WORKERS</h1>
          </div>
          <div className="row">
            <p className="content">
              Our team of experienced workers brings years of hands-on expertise, {" "}
              <br />
              ensuring every project is completed with precision, efficiency, and care.  {" "}
              <br />
              Skilled in modern techniques and traditional craftsmanship, they deliver
              <br />
              high-quality results that exceed expectations.

            </p>
          </div>
          <div className="row">
            <div className="link wow fadeInRight">
              <div className="link-1">
                <ul>
                  <li className="left">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Skilled & knowledgeable staff
                    </Link>
                  </li>
                  <li className="left">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Reliable and dedicated
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="link-2">
                <ul>
                  <li className="right">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Trained in modern techniques
                    </Link>
                  </li>
                  <li className="right">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      Focused on quality results
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
