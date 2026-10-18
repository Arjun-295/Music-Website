import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const competitionsData = [
  {
    id: 1,
    title: 'Carnatic Vocal Excellence Contest',
    venue: 'Mata Sangeetha Vidhyalaya, Main Hall',
    location: 'Physical Event',
    status: 'Live',
    statusBadge: 'Live',
    statusBadgeClass: 'bg-primary text-on-primary',
    timeInfo: 'Ends in 2 days',
    date: '2026-10-20',
    dateFormatted: 'Oct 20, 2026',
    mode: 'Offline',
    participation: 'Individual Participation',
    participationIcon: 'group',
    category: 'Vocal',
    level: 'Senior Category',
    posted: 'Posted 2 days ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0E22O1lV3Zi_AFC89QiFNZpJECugfXATmFeBd9W0vrN50fuBujYr7va-BfPP1T1Hspi-QmgVrkqmofpKBOqNQumBF77xd2UYiw-Mi0tST_NxGPWy02qIp2e0vcfEjYZbQSR1BrLiJkcKO23MmDVTXu8EaF99f8zb1cNNE7OI_sUwb3yOjmOpSiSxYLe3RIV7hWZOpPWCIclQx5hfkfko4X35UsoEvTJyECBn6wbmzkTtxpmR_oKIkvKeuLpw1AslF_z1AmQqEodWq',
    alt: 'Vocal Contest',
    description: 'A senior-level vocal competition focusing on Manodharma, sruti purity, and intricate Ragam-Tanam-Pallavi renditions.'
  },
  {
    id: 2,
    title: 'Veena Recital Competition',
    venue: 'Online Global Auditions',
    location: 'Online',
    status: 'Upcoming',
    statusBadge: 'Upcoming',
    statusBadgeClass: 'bg-blush-pink text-on-primary-container',
    timeInfo: 'Starts Oct 12, 2026',
    date: '2026-10-12',
    dateFormatted: 'Oct 12, 2026',
    mode: 'Online',
    participation: 'Solo Instrumental',
    participationIcon: 'person',
    category: 'Veena',
    level: 'Open Age',
    posted: 'Registration open',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkJ7x4yBzRtJVRbnlhhWhCZFe9VNrv0Qvm0JruOXqSUR_yzAf61K_Z6hpP9eJflAR93dY67-moHp6CCxAkj9fwonc2a2ko7-IIhukQQ5ojOIIUGkwvsU8TfXMNlpMOFqUCpVZ_cKs4nXLMwLuVKF_Xn6jJ-djnnaSAxR1gFW1NXUDnEAv0KikAIJPFcBJk8B-QzsLYkARUoZoUp7C29iEs6jOlEBMZ7qGZKWI98MQVAKIFybFgUr-cfO7tUxjbermdBC-AexBYTqjc',
    alt: 'Veena Competition',
    description: 'Celebrating the celestial Saraswati Veena. Open to solo instrumentalists with evaluations on meettu gamakas and raga delineation.'
  },
  {
    id: 3,
    title: 'Junior Violin Festival',
    venue: 'Chennai Academy of Arts',
    location: 'Chennai',
    status: 'Upcoming',
    statusBadge: 'Upcoming',
    statusBadgeClass: 'bg-blush-pink text-on-primary-container',
    timeInfo: 'Starts Nov 05, 2026',
    date: '2026-11-05',
    dateFormatted: 'Nov 05, 2026',
    mode: 'Offline',
    participation: 'Junior Category (Under 15)',
    participationIcon: 'face_6',
    category: 'Violin',
    level: 'Folk & Classical',
    posted: 'Opening soon',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGbfcbqp6TmjIBsZ7r_7iUffwKrwNUzdbRrq_7a0Q1YF4aWJvZwAHdF5Oqcd1dz1-ZfO7zc3IRx6zcyRHq2hxN9m_Sio1LCwW6AqcfOQqXmpVOy0K5NfgfLzFVWjeWkNdWSgfT4C5_VnP9OPkcj6fi8Q4Su4yz7YZwXjmBePkk2r2t8PJM27Yoac_Ox9nkl-MpEcc6UYrT4aVJRF8NHRCpAVQ66aG7DPmzzkhRCe-zh9fsQFRay3yAakNtDnFCrvvxOLqfNQyyFzY',
    alt: 'Violin Festival',
    description: 'A platform for aspiring junior violinists to showcase bow control, fingering dexterity, and soulful gamakas.'
  },
  {
    id: 4,
    title: 'Swaralaya Mridangam & Laya Trophy',
    venue: 'Swaralaya Sabha Hall, Chennai',
    location: 'Physical Event',
    status: 'Completed',
    statusBadge: 'Completed',
    statusBadgeClass: 'bg-surface-variant text-on-surface-variant',
    timeInfo: 'Concluded Sep 15, 2026',
    date: '2026-09-15',
    dateFormatted: 'Sep 15, 2026',
    mode: 'Offline',
    participation: 'Solo & Accompaniment',
    participationIcon: 'music_note',
    category: 'Percussion',
    level: 'All Age Groups',
    posted: 'Results declared',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCiPRW-5ciKbx6JWrpRxnIOGuXzOOIcJ7fY403nIQ7DuRSZfMR-Jx8X0cv5tnn3U9SbAgGIyrgwbN-EC9rseF5MYEJDhBNNZxIn2WGLMD2Gq-RVLNJQV4hwEz7R_z-BrnMHUG0vEsNKMGNI_G_8jxCASHOwY16Ry11Hg9k0E_kK6ujfdoai1Zgch6hpdtVRnvQhNHaP7AV7RFmyikqFJuJnUddsILdB258tgn3ZkFh_LKRS3FGfvy1NfhOg0J4Eyv8vx8b4tv14Yjc',
    alt: 'Mridangam Trophy',
    description: 'Annual percussion championship judging nadai bedhams, sollukattu pronunciation, and rhythmic mastery across multiple talas.'
  },
  {
    id: 5,
    title: 'Global Carnatic Youth Vocal Championship',
    venue: 'Virtual Auditorium (Zoom Live)',
    location: 'Online',
    status: 'Upcoming',
    statusBadge: 'Upcoming',
    statusBadgeClass: 'bg-blush-pink text-on-primary-container',
    timeInfo: 'Starts Dec 10, 2026',
    date: '2026-12-10',
    dateFormatted: 'Dec 10, 2026',
    mode: 'Online',
    participation: 'Youth Under 21',
    participationIcon: 'person',
    category: 'Vocal',
    level: 'Youth Category',
    posted: 'Registrations open',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCefIQUtw9FbiyHHnAaok5rD2v01Zn6tfqkQULdbcWMGQKPS1cJ42hAvrzdanwKfI7Uj8nUrvzggWGZHqNVpfXmQq-Vn4fTZMcOhfYH7inB2j9I5rtOgPLvYVAhUbuEFIF3oZ9LcJECGANEyXWv1aij67veofc9DafEjIvhGGKOPJQiMfeDlo2q6-gglpNrF7aQpoMqd1KQa8uzphXx86XzJD4zhRo27RdygAlsmc0W0l-WNlB6lSWdEWyhyDyFBAUD7yiZCEp8PXOu',
    alt: 'Youth Vocal Championship',
    description: 'Worldwide digital championship inviting young vocalists to interpret saint-poet compositions with traditional authenticity.'
  },
  {
    id: 6,
    title: 'All India Flute & Veena Harmony Contest',
    venue: 'Online Grand Finale',
    location: 'Online',
    status: 'Completed',
    statusBadge: 'Completed',
    statusBadgeClass: 'bg-surface-variant text-on-surface-variant',
    timeInfo: 'Concluded Aug 20, 2026',
    date: '2026-08-20',
    dateFormatted: 'Aug 20, 2026',
    mode: 'Online',
    participation: 'Solo Instrumental',
    participationIcon: 'headset_mic',
    category: 'Veena',
    level: 'Intermediate & Advanced',
    posted: 'Archives available',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALxXFc7ZGovZ14J7qwOwA8LyCRozM3car2CiKCIiKzu9_r-qVZvnLTGICgU0lq37TB2CkSFaupEMUF1Jgm7eP39-XUVfEfAwjlTO2Gm6F3nD_Jry20zIJUzjYQgdaAmCVJOCJtkiw7IVOiq9pp3SIXAx0lKtLIt-KTJl6KnZbkMWPg_THzYwWDkGyQK3gpIeEGEaj0sUJAeLevs9y7Cw6kVLWKRdUt9GjbsLM7tElEy03TslC_RobDXL_xzd0AL1qGx5ehMn_CdRfV',
    alt: 'Instrumental Contest',
    description: 'National contest honoring delicate gamaka embellishments, breath control, and swara prastara on Veena and Flute.'
  }
];

const CATEGORIES = ['All', 'Vocal', 'Veena', 'Violin', 'Percussion'];
const STATUSES = ['All', 'Upcoming', 'Completed', 'Live'];
const MODES = ['All', 'Online', 'Offline'];

const Competitions = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [modeFilter, setModeFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [favorites, setFavorites] = useState({});
  const [toastMessage, setToastMessage] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Toggle favorite
  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Share competition
  const handleShare = (e, comp) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = window.location.origin + '/competition-details';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setToastMessage(`Link to "${comp.title}" copied!`);
        setTimeout(() => setToastMessage(''), 3000);
      }).catch(() => {
        setToastMessage('Link copied to clipboard!');
        setTimeout(() => setToastMessage(''), 3000);
      });
    } else {
      setToastMessage('Link copied to clipboard!');
      setTimeout(() => setToastMessage(''), 3000);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setStatusFilter('All');
    setCategoryFilter('All');
    setModeFilter('All');
    setDateFilter('');
  };

  // Calculate active filter count
  const activeFilterCount =
    (statusFilter !== 'All' ? 1 : 0) +
    (categoryFilter !== 'All' ? 1 : 0) +
    (modeFilter !== 'All' ? 1 : 0) +
    (dateFilter ? 1 : 0);

  // Combined filtering logic
  const filteredCompetitions = useMemo(() => {
    return competitionsData.filter((item) => {
      // 1. Status Filter: supports 'All', 'Upcoming', 'Completed', 'Live' (and 'Closed' as completed)
      const matchesStatus = (() => {
        if (statusFilter === 'All') return true;
        const target = statusFilter.toLowerCase();
        const itemStatus = item.status.toLowerCase();
        if (target === 'completed' || target === 'closed') {
          return itemStatus === 'completed' || itemStatus === 'closed';
        }
        return itemStatus === target;
      })();

      // 2. Category Filter: 'All', 'Vocal', 'Veena', 'Violin', 'Percussion'
      const matchesCategory =
        categoryFilter === 'All' ||
        item.category.toLowerCase() === categoryFilter.toLowerCase();

      // 3. Mode Filter: 'All', 'Online', 'Offline'
      const matchesMode =
        modeFilter === 'All' ||
        item.mode.toLowerCase() === modeFilter.toLowerCase();

      // 4. Date Filter: matches exact date or matches if no date selected
      const matchesDate = !dateFilter || item.date === dateFilter;

      return matchesStatus && matchesCategory && matchesMode && matchesDate;
    }).sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [statusFilter, categoryFilter, modeFilter, dateFilter, sortBy]);

  const displayedCompetitions = filteredCompetitions.slice(0, visibleCount);

  return (
    <div className="font-body bg-surface text-cocoa-text">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-cocoa-text text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce text-sm">
          <span className="material-symbols-outlined text-sm text-blush-pink">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="pt-32 pb-20 max-w-[1200px] mx-auto px-6 min-h-screen">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cocoa-text mb-4">
            Available Competitions
          </h1>
          <p className="text-on-surface-variant max-w-2xl">
            Discover and participate in prestigious Carnatic music competitions. Showcase your talent across various disciplines of South Indian classical music.
          </p>
        </div>

        {/* Primary Filters Section */}
        <div className="mb-8 p-5 bg-warm-cream/50 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col gap-4">
          {/* Top Row: Status pills, Filters badge, Clear button, Sort By */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-outline-variant/30">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-outline/50 bg-surface-container-low text-xs font-semibold">
                <span className="material-symbols-outlined text-base text-primary">filter_list</span>
                <span>Filters</span>
                <span className={`text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold transition-all ${
                  activeFilterCount > 0
                    ? 'bg-primary text-on-primary scale-110 shadow-sm'
                    : 'bg-outline-variant/60 text-cocoa-text'
                }`}>
                  {activeFilterCount}
                </span>
              </div>

              <div className="h-5 w-px bg-outline-variant/40 mx-1 hidden sm:block"></div>

              {/* Status Buttons (Upcoming / Completed / Live / All) */}
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="Status Filter">
                {STATUSES.map((status) => {
                  const isSelected = statusFilter === status;
                  return (
                    <button
                      key={status}
                      id={`filter-status-${status.toLowerCase()}`}
                      onClick={() => setStatusFilter(status)}
                      className={`cursor-pointer px-4 py-2 rounded-xl border transition-all text-xs font-medium ${
                        isSelected
                          ? 'border-primary bg-primary text-on-primary font-semibold shadow-sm'
                          : 'border-outline-variant/60 bg-surface hover:border-primary text-cocoa-text hover:bg-surface-container-low'
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>

              {/* Clear Filters Button */}
              {activeFilterCount > 0 && (
                <button
                  id="clear-filters-btn"
                  onClick={handleClearFilters}
                  className="cursor-pointer flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rosewood bg-blush-pink/40 hover:bg-blush-pink border border-rosewood/30 transition-all ml-1"
                  title="Reset all filters"
                >
                  <span className="material-symbols-outlined text-sm">restart_alt</span>
                  Clear Filters
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs text-on-surface-variant font-medium">Sort By:</span>
              <select
                id="sort-by-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="cursor-pointer px-3.5 py-2 rounded-xl border border-outline-variant/60 bg-surface text-xs font-medium text-cocoa-text outline-none focus:border-primary transition-all"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Category, Mode, and Date Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
            {/* Category Filter */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-category" className="text-xs font-semibold text-cocoa-text flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">category</span>
                Category
              </label>
              <select
                id="filter-category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none transition-all cursor-pointer ${
                  categoryFilter !== 'All'
                    ? 'border-primary bg-primary/10 text-cocoa-text font-semibold'
                    : 'border-outline-variant/60 bg-surface text-cocoa-text focus:border-primary'
                }`}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Filter (Online / Offline) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-mode" className="text-xs font-semibold text-cocoa-text flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                Mode
              </label>
              <select
                id="filter-mode"
                value={modeFilter}
                onChange={(e) => setModeFilter(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none transition-all cursor-pointer ${
                  modeFilter !== 'All'
                    ? 'border-primary bg-primary/10 text-cocoa-text font-semibold'
                    : 'border-outline-variant/60 bg-surface text-cocoa-text focus:border-primary'
                }`}
              >
                {MODES.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode === 'All' ? 'All Modes (Online & Offline)' : mode}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Filter */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="filter-date" className="text-xs font-semibold text-cocoa-text flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                  Date
                </span>
                {dateFilter && (
                  <button
                    onClick={() => setDateFilter('')}
                    className="text-[11px] text-rosewood hover:underline font-semibold cursor-pointer"
                  >
                    Clear date
                  </button>
                )}
              </label>
              <div className="relative">
                <input
                  id="filter-date"
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs font-medium outline-none transition-all cursor-pointer ${
                    dateFilter
                      ? 'border-primary bg-primary/10 text-cocoa-text font-semibold'
                      : 'border-outline-variant/60 bg-surface text-cocoa-text focus:border-primary'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Active Filter Chips Summary */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/30">
              <span className="text-xs text-on-surface-variant font-medium">Active Filters:</span>

              {statusFilter !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface border border-outline-variant text-[11px] font-medium text-cocoa-text">
                  Status: <strong className="font-semibold">{statusFilter}</strong>
                  <button
                    onClick={() => setStatusFilter('All')}
                    className="hover:text-error ml-0.5 cursor-pointer"
                    aria-label="Remove status filter"
                  >
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}

              {categoryFilter !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface border border-outline-variant text-[11px] font-medium text-cocoa-text">
                  Category: <strong className="font-semibold">{categoryFilter}</strong>
                  <button
                    onClick={() => setCategoryFilter('All')}
                    className="hover:text-error ml-0.5 cursor-pointer"
                    aria-label="Remove category filter"
                  >
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}

              {modeFilter !== 'All' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface border border-outline-variant text-[11px] font-medium text-cocoa-text">
                  Mode: <strong className="font-semibold">{modeFilter}</strong>
                  <button
                    onClick={() => setModeFilter('All')}
                    className="hover:text-error ml-0.5 cursor-pointer"
                    aria-label="Remove mode filter"
                  >
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}

              {dateFilter && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface border border-outline-variant text-[11px] font-medium text-cocoa-text">
                  Date: <strong className="font-semibold">{dateFilter}</strong>
                  <button
                    onClick={() => setDateFilter('')}
                    className="hover:text-error ml-0.5 cursor-pointer"
                    aria-label="Remove date filter"
                  >
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}

              <button
                onClick={handleClearFilters}
                className="text-xs text-rosewood hover:underline font-semibold ml-2 cursor-pointer"
              >
                Reset All
              </button>
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-on-surface-variant font-medium">
            Showing <span className="font-bold text-cocoa-text">{displayedCompetitions.length}</span> of{' '}
            <span className="font-bold text-cocoa-text">{filteredCompetitions.length}</span>{' '}
            {filteredCompetitions.length === 1 ? 'competition' : 'competitions'}
          </p>
        </div>

        {/* Empty State */}
        {filteredCompetitions.length === 0 && (
          <div className="bg-warm-cream rounded-2xl p-12 text-center border border-dashed border-outline-variant/60 my-6 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">event_busy</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-cocoa-text mb-2">
              No Competitions Found
            </h3>
            <p className="text-on-surface-variant text-sm max-w-md mx-auto mb-6">
              We couldn't find any competitions matching your selected filter combination (
              {categoryFilter !== 'All' && `Category: ${categoryFilter}, `}
              {statusFilter !== 'All' && `Status: ${statusFilter}, `}
              {modeFilter !== 'All' && `Mode: ${modeFilter}, `}
              {dateFilter && `Date: ${dateFilter}`}
              ). Try clearing or adjusting your filters.
            </p>
            <button
              id="empty-state-clear-btn"
              onClick={handleClearFilters}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:opacity-90 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-base">restart_alt</span>
              Clear Filters &amp; Restore All
            </button>
          </div>
        )}

        {/* Competition Cards List */}
        <div className="flex flex-col gap-6">
          {displayedCompetitions.map((comp) => {
            const isFav = !!favorites[comp.id];

            return (
              <Link
                key={comp.id}
                to="/competition-details"
                className="bg-warm-cream rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group block text-inherit no-underline"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${comp.statusBadgeClass}`}
                    >
                      {comp.statusBadge}
                    </span>
                    <span className="text-xs text-on-surface-variant font-medium">
                      {comp.timeInfo}
                    </span>
                    <span className="text-xs text-on-surface-variant/70 font-medium ml-auto hidden sm:inline-block">
                      Date: {comp.dateFormatted}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-cocoa-text mb-2 group-hover:text-primary transition-colors">
                    {comp.title}
                  </h2>
                  <p className="text-on-surface-variant mb-4 font-medium">{comp.venue}</p>

                  <p className="text-charcoal-text text-sm mb-6 leading-relaxed line-clamp-2">
                    {comp.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">
                        {comp.participationIcon}
                      </span>
                      <span className="text-sm">{comp.participation}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-lg">
                        {comp.mode === 'Online' ? 'videocam' : 'location_on'}
                      </span>
                      <span className="text-sm">
                        {comp.mode === 'Online' ? 'Online' : 'Physical Event'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">
                      {comp.category}
                    </span>
                    <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">
                      {comp.level}
                    </span>
                    <span className="px-3 py-1 bg-blush-pink/60 text-on-primary-container text-xs font-semibold rounded-lg">
                      {comp.mode}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-on-surface-variant">{comp.posted}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={(e) => handleShare(e, comp)}
                        aria-label="Share competition"
                        title="Share competition"
                        className="cursor-pointer text-on-surface-variant hover:text-primary transition-colors p-1 rounded-lg hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined">share</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => toggleFavorite(e, comp.id)}
                        aria-label="Save to favorites"
                        title={isFav ? 'Remove favorite' : 'Add favorite'}
                        className={`cursor-pointer transition-colors p-1 rounded-lg hover:bg-surface-container ${
                          isFav ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          favorite
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <img
                    alt={comp.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={comp.image}
                  />
                  <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {comp.mode}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Load More / End State */}
        {filteredCompetitions.length > 0 && (
          <div className="mt-16 text-center">
            {displayedCompetitions.length < filteredCompetitions.length ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="cursor-pointer inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Load More Competitions
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            ) : (
              <span className="text-xs text-on-surface-variant font-medium">
                Showing all {filteredCompetitions.length} available competitions
              </span>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Competitions;
