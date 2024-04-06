import ContactPage from './components/ContactForm';
import Launch from './components/Launch'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side Section */}
      <div className="w-1/2">
        <Launch />
      </div>

      {/* Right Side Section */}
      <div className="w-1/2">
        <ContactPage />
      </div>
    </div>
  );
}
