import React from 'react'
import demoVideo from '../assets/SmartIDP3_2.mp4'
import { X, Play, ShieldCheck } from 'lucide-react'

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center">
              <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#14532D] block">SmartiDP EDMS Platform Overview</span>
              <span className="text-[10px] text-slate-500">Capture, Manage, Automate & Govern Enterprise Information</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src={demoVideo}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

