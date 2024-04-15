import React from "react";
import { Link } from 'react-router-dom';



const footerstyle = {
    position: 'relative',
    bottom: "0",
    width: '100%',
    color: '#fff',
    padding: '10px'
    
};

function Footer(){


        return(
            <footer className="bg-green-950 text-white" style={footerstyle}>
  <div className="container mx-auto py-8">
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
      {/* Column 1 */}
      <div className="footer-col">
        <h4 className="font-bold mb-2 text-slate-400 text-sm">Get To Know!</h4>
        <ul>
          <li><a href="#" className="text-sm hover:underline">About us</a></li>
          <li><a href="#" className="text-sm hover:underline">Contact us</a></li>
          <li><a href="#" className="text-sm hover:underline">Careers</a></li>
          <li><a href="#" className="text-sm hover:underline">Workhelper Stories</a></li>
          <li><a href="#" className="text-sm hover:underline">Press</a></li>
          <li><a href="#" className="text-sm hover:underline">Organisation Information</a></li>
          {/* Add more links if needed */}
        </ul>
      </div>
      
      {/* Column 2 */}
      <div className="footer-col">
        <h4 className="font-bold mb-2 text-slate-400 text-sm">Assistance</h4>
        <ul>
          <li><a href="#" className="text-sm hover:underline">Payments</a></li>
          <li><a href="#" className="text-sm hover:underline">Shipping</a></li>
          <li><a href="#" className="text-sm hover:underline">Cancel and Refunds</a></li>
          <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
          <li><a href="#" className="text-sm hover:underline">Report to us!</a></li>
          {/* Add more links if needed */}
        </ul>
      </div>
      
      {/* Column 3 */}
      <div className="footer-col">
        <h4 className="font-bold mb-2 text-slate-400 text-sm">Sibling Companies</h4>
        <ul>
          <li><a href="#" className="text-sm hover:underline">Ekkhoj Technology</a></li>
          <li><a href="#" className="text-sm hover:underline">Ekkhoj Advertising Agency</a></li>
          <li><a href="#" className="text-sm hover:underline">Upcoming Organisations</a></li>
          {/* Add more links if needed */}
        </ul>
      </div>
      
      {/* Column 4 */}
      <div className="footer-col">
        <h4 className="font-bold mb-2 text-slate-400 text-sm">Consumer Policies</h4>
        <ul>
          <li><a href="#" className="text-sm hover:underline">Terms and Conditions</a></li>
          <li><a href="#" className="text-sm hover:underline">Security</a></li>
          <li><a href="#" className="text-sm hover:underline">Privacy</a></li>
          <li><a href="#" className="text-sm hover:underline">Sitemap</a></li>
          <li><a href="#" className="text-sm hover:underline">Public Grievances</a></li>
          <li><a href="#" className="text-sm hover:underline">Public Law Compliances</a></li>
          {/* Add more links if needed */}
        </ul>
      </div>

       {/* Column 5 */}
       <div className="footer-col">
        <h4 className="font-bold mb-2 text-slate-400 text-md">Mail To Us!</h4>
        <ul>
          <li><p href="#" className="text-sm text-zinc-300"> 0000123456 Enterprise, Town Badlapur, Post Badlapur <br/> District Jaunpur Uttar Pradesh <br/> India, 222125 </p></li>
          <li><p className="mt-2 mb-2 text-sm  text-slate-400 font-bold">Social:</p></li>
          <li><a href="#" className=" text-sm hover:underline">Twitter</a></li>
          <li><a href="#" className=" text-sm hover:underline">Facebook</a></li>
          <li><a href="#" className=" text-sm hover:underline">Youtube</a></li>
          <li><a href="#" className=" text-sm hover:underline">Instagram</a></li>
          {/* Add more links if needed */}
        </ul>
      </div>

       {/* Column 6 */}
       <div className="footer-col">
        <h4 className="font-bold mb-2 text-sm text-slate-400">Make Money With Us!</h4>
        <ul>
          <li><a href="#" className="text-sm hover:underline">Sell with Workhelper</a></li>
          <li><a href="#" className="text-sm hover:underline">Become Advertising Partner</a></li>
          <li><a href="#" className="text-sm hover:underline">Affliation</a></li>
          <li><a href="#" className="text-sm hover:underline">Get Sub-domain</a></li>
          <li><a href="#" className="text-sm hover:underline">Get Hosting</a></li>
          <li><a href="#" className="text-sm hover:underline">Advertise on Workhelper</a></li>
          {/* Add more links if needed */}
        </ul>
      </div>
    </div>
  </div>
</footer>

            
                
           
        )








}
export default Footer;