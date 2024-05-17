import React from 'react'
import { Link } from 'react-router-dom';
 function Footer() {
  return (
    <>
    <section className="footer-2 section-padding gray-bg pb-5 ">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="subscribe-footer text-center">
						<div className="form-group mb-0">
							<h2 className="mb-3">Subscribe Newsletter</h2>
							<p className="mb-4">Subscribe my Newsletter for new blog posts , tips and info.
							</p>
							<div className="form-group form-row align-items-center mb-0">
								<div className="col-sm-15">
									<input type="email" className="form-control" placeholder="Email Address"/>
								</div>
								<div className="col-sm-15 mt-3">
									<Link href="#" className="btn btn-dark " >Subscribe</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-btm mt-5 pt-4 border-top">
				<div className="row">
					<div className="col-lg-12">
						<ul className="list-inline footer-socials-2 text-center">
							<li className="list-inline-item"><Link href="#">Privacy policy</Link></li>
							<li className="list-inline-item"><Link href="#">Support</Link></li>
							<li className="list-inline-item"><Link href="#">About</Link></li>
							<li className="list-inline-item"><Link href="#">Contact</Link></li>
							<li className="list-inline-item"><Link href="#">Terms</Link></li>
							<li className="list-inline-item"><Link href="#">Category</Link></li>
						</ul>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="copyright text-center ">
							@ copyright 2024
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
export default Footer;