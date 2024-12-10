
import { CheckCircle } from 'lucide-react'

export default function Service() {

  return (
    <div className="min-h-screen  text-white p-8 space-y-12">
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Manage peak call center times
          </h2>
          <p className="text-blue-400">
            Provide a seamless customer experience with minimal wait times and quick issue resolution. 
            Simultaneously answer and call multiple customers at once, even during peak hours
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-300">
                Ensure no customer call goes unanswered, regardless of call volume or time of day
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-300">
                Easily scale your call handling capacity without the need for additional staff
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#12131E] rounded-lg p-6 h-64">
          {/* Blank space for future layout */}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-[#12131E] rounded-lg p-6 h-64">
          {/* Blank space for future layout */}
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Collect valuable customer feedback
          </h2>
          <p className="text-blue-400">
            Actively listen to your customer feedback and highlight the most important conversation
            transcripts. Quickly identify and address missed opportunities or at-risk customers with targeted
            follow-up calls
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-300">
                Gather valuable customer insights and feedback effortlessly through automated follow-up calls
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-gray-300">
                Identify trends and common issues by analyzing conversation transcripts and sentiment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

