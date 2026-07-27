import { Shield, Clock, User, CheckCircle } from 'lucide-react';
import { GoogleRatingBadge } from '@/components/ui/google-rating-badge';

export function TrustBar() {
  return (
    <div className="w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-center gap-0 overflow-x-auto py-3 md:py-4 scrollbar-hide">
          {/* Google Rating */}
          <div className="flex items-center shrink-0 px-3 md:px-5">
            <GoogleRatingBadge size="sm" />
          </div>

          <span className="text-slate-200 shrink-0">|</span>

          {/* §34a ausgebildet */}
          <div className="flex items-center gap-1.5 shrink-0 px-3 md:px-5 text-sm text-slate-700">
            <Shield className="h-4 w-4 text-primary shrink-0" />
            <span className="text-primary font-medium whitespace-nowrap">§34a ausgebildet</span>
          </div>

          <span className="text-slate-200 shrink-0">|</span>

          {/* 24/7 erreichbar */}
          <div className="flex items-center gap-1.5 shrink-0 px-3 md:px-5 text-sm text-slate-700">
            <Clock className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="whitespace-nowrap">24/7 erreichbar</span>
          </div>

          <span className="text-slate-200 shrink-0">|</span>

          {/* Inhabergeführt */}
          <div className="flex items-center gap-1.5 shrink-0 px-3 md:px-5 text-sm text-slate-700">
            <User className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="whitespace-nowrap">Inhabergeführt</span>
          </div>

          <span className="text-slate-200 shrink-0">|</span>

          {/* Kostenlose Erstberatung */}
          <div className="flex items-center gap-1.5 shrink-0 px-3 md:px-5 text-sm text-slate-700">
            <CheckCircle className="h-4 w-4 text-slate-500 shrink-0" />
            <span className="whitespace-nowrap">Kostenlose Erstberatung</span>
          </div>
        </div>
      </div>
    </div>
  );
}
