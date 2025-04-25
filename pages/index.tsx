import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'

// Icons
import { 
  DocumentTextIcon, 
  BoltIcon, 
  LockClosedIcon, 
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>REBNY Lease AI | Automated Lease Generation</title>
        <meta name="description" content="Generate and sign REBNY-compliant leases in minutes, not hours." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Generate REBNY Leases in <span className="text-blue-700">Minutes</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Our AI-powered platform automates the entire lease generation process, saving you hours of paperwork and ensuring total compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/leases/condo" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-center transition-colors">
                Generate a Lease Now
              </Link>
              <Link href="#features" className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-700 font-medium rounded-lg text-center transition-colors border border-blue-700">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <Image 
                src="/dashboard-preview.png" 
                alt="REBNY Lease AI Dashboard" 
                width={600} 
                height={400}
                className="rounded-lg"
                // If you don't have this image yet, replace with a placeholder
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=Lease+Generation+Preview"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by leading real estate professionals</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* Replace with actual client logos */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Logo 1</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Logo 2</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Logo 3</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">Logo 4</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our platform simplifies the entire lease creation process from start to finish
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <DocumentTextIcon className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fill Out Once</h3>
              <p className="text-gray-600">
                Complete one simple form with all lease details. Our AI handles the rest, generating a complete REBNY-compliant lease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <BoltIcon className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Delivery</h3>
              <p className="text-gray-600">
                Receive your completed lease document immediately. No waiting, no back-and-forth, no delays in your closing process.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <LockClosedIcon className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Signatures</h3>
              <p className="text-gray-600">
                Send documents directly for signing via DocuSign integration. Track status and get notified when complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Simple 3-Step Process</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From form to signed lease in minutes
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="text-xl font-bold">Complete the Form</h3>
              </div>
              <p className="text-gray-600">
                Fill out a single form with tenant, property, and lease term details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="text-xl font-bold">Pay & Generate</h3>
              </div>
              <p className="text-gray-600">
                Make a secure payment and our AI generates your REBNY-compliant lease instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="text-xl font-bold">Sign & Send</h3>
              </div>
              <p className="text-gray-600">
                Review, send for signatures via DocuSign, and download your completed lease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          
          <div className="max-w-3xl mx-auto bg-blue-50 p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div>
                <p className="text-lg text-gray-700 italic mb-4">
                  "This platform has saved our brokerage countless hours of paperwork. What used to take days now takes minutes, and the leases are always compliant with the latest REBNY standards."
                </p>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-600">Senior Real Estate Broker, NYC Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Streamline Your Lease Process?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Simple, transparent pricing with no hidden fees
          </p>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 max-w-lg mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-2">Pay Per Lease</h3>
            <p className="text-gray-600 mb-4">No subscription required</p>
            <p className="text-5xl font-bold mb-6">$49<span className="text-xl font-normal text-gray-600">/lease</span></p>
            
            <ul className="text-left mb-8">
              <li className="mb-3 flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>Fully REBNY-compliant lease document</span>
              </li>
              <li className="mb-3 flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>DocuSign integration for e-signatures</span>
              </li>
              <li className="mb-3 flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>PDF download for your records</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <span>Email support</span>
              </li>
            </ul>
            
            <Link href="/leases/condo" className="block w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-center transition-colors">
              Generate Your First Lease
            </Link>
          </div>
          
          <p className="text-sm text-blue-200">
            Need a volume discount? <a href="#contact" className="underline">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Is my lease guaranteed to be REBNY compliant?</h3>
              <p className="text-gray-600">
                Yes, all leases generated through our platform are 100% compliant with the latest REBNY standards and automatically updated when requirements change.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">How quickly will I receive my completed lease?</h3>
              <p className="text-gray-600">
                Leases are generated instantly after payment is processed. You can immediately send it for signature or download the PDF.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Can I make edits to the generated lease?</h3>
              <p className="text-gray-600">
                While our system generates complete leases, you can download the document and make any necessary modifications before sending for signatures.
              </p>
            </div>
            
            <div className="pb-6">
              <h3 className="text-xl font-bold mb-2">What happens if I need support?</h3>
              <p className="text-gray-600">
                We provide email support for all users. Enterprise clients receive priority support with faster response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Automating Your REBNY Leases Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join real estate professionals who have streamlined their lease process
          </p>
          
          <Link href="/leases/condo" className="inline-flex items-center px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-center transition-colors">
            Get Started Now
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">REBNY Lease AI</h3>
              <p className="mb-4">
                Automating real estate leases for New York professionals since 2023.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon placeholder */}
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon placeholder */}
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} REBNY Lease AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 