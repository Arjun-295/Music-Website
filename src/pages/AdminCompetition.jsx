import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TEMPLATES = [
  {
    id: 'classic',
    name: 'Classic',
    desc: 'Standard layout with large banner.',
    renderThumbnail: () => (
      <div className="w-full h-full bg-white p-4">
        <div className="w-full h-12 bg-primary-container rounded mb-2"></div>
        <div className="w-3/4 h-2 bg-surface-container rounded mb-1"></div>
        <div className="w-1/2 h-2 bg-surface-container rounded mb-4"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-surface-container rounded"></div>
          <div className="aspect-square bg-surface-container rounded"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'modern',
    name: 'Modern',
    desc: 'Immersive hero and clean blocks.',
    renderThumbnail: () => (
      <div className="w-full h-full bg-white relative">
        <div className="absolute inset-0 bg-primary-container/30"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="w-full h-4 bg-white rounded mb-2 shadow-sm"></div>
          <div className="w-2/3 h-2 bg-white rounded shadow-sm"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'minimal',
    name: 'Minimal',
    desc: 'Clean, single-column focused design.',
    renderThumbnail: () => (
      <div className="w-full h-full bg-white p-6 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-primary mb-4"></div>
        <div className="w-16 h-2 bg-surface-container rounded mb-1"></div>
        <div className="w-12 h-2 bg-surface-container rounded mb-6"></div>
        <div className="w-full h-24 bg-surface-container-low rounded"></div>
      </div>
    ),
  },
  {
    id: 'poster',
    name: 'Event Poster',
    desc: 'Bold typography and poster style.',
    renderThumbnail: () => (
      <div className="w-full h-full bg-primary-container p-4 flex flex-col justify-end">
        <div className="w-full aspect-[3/4] bg-white rounded-lg mb-2 flex items-center justify-center">
          <span className="material-symbols-outlined text-outline">photo</span>
        </div>
        <div className="w-full h-4 bg-primary rounded"></div>
      </div>
    ),
  },
];

const AdminCompetition = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Responsive mobile sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Form states
  const [competitionName, setCompetitionName] = useState('');
  const [competitionType, setCompetitionType] = useState('Singing (Vocal)');
  const [description, setDescription] = useState('');
  const [bannerPreview, setBannerPreview] = useState(null);

  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [regDeadline, setRegDeadline] = useState('');
  const [venueType, setVenueType] = useState('Online');
  const [venueLink, setVenueLink] = useState('');

  const [participationMode, setParticipationMode] = useState('Solo');
  const [ageGroup, setAgeGroup] = useState('Under 10');
  const [registrationFee, setRegistrationFee] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [prizeDetails, setPrizeDetails] = useState('');

  // Google Form link state
  const [googleFormLink, setGoogleFormLink] = useState('');

  // Selected Template
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  // Notification Toast
  const [toast, setToast] = useState(null);
  const [autosaveTime, setAutosaveTime] = useState('14:20 PM');

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBannerPreview(url);
      showToast(`Uploaded banner: ${file.name}`);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setBannerPreview(url);
      showToast(`Uploaded banner: ${file.name}`);
    }
  };

  const handleSaveDraft = () => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setAutosaveTime(now);
    showToast('Competition draft successfully saved!', 'info');
  };

  const handlePublish = () => {
    if (!competitionName.trim()) {
      showToast('Please enter a competition name.', 'error');
      return;
    }
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setAutosaveTime(now);
    showToast(`"${competitionName}" published successfully!`, 'success');
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-20 right-8 z-[100] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all transform animate-bounce ${
            toast.type === 'error'
              ? 'bg-error text-on-error'
              : toast.type === 'info'
              ? 'bg-secondary text-on-secondary'
              : 'bg-primary text-on-primary'
          }`}
        >
          <span className="material-symbols-outlined">
            {toast.type === 'error' ? 'error' : toast.type === 'info' ? 'bookmark' : 'check_circle'}
          </span>
          <span className="text-label-md font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation (Identity Lock) */}
      <aside
        className={`h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant shadow-sm flex flex-col p-4 z-50 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-8 px-2 flex justify-between items-center">
          <div>
            <h1 className="font-display text-headline-sm font-semibold text-primary">Carnatic Serenity</h1>
            <p className="text-label-sm text-on-surface-variant opacity-70">Admin Dashboard</p>
          </div>
          <button
            className="md:hidden text-on-surface-variant hover:text-primary"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="space-y-2 flex-grow">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-semibold transition-all duration-200 active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-primary">emoji_events</span>
            <span className="font-body text-label-md">Competitions</span>
          </Link>

          <Link
            to="/workshops"
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined">theater_comedy</span>
            <span className="font-body text-label-md">Workshops</span>
          </Link>

          <a
            href="#students"
            onClick={(e) => { e.preventDefault(); showToast('Student directory module loaded', 'info'); }}
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="font-body text-label-md">Students</span>
          </a>

          <a
            href="#settings"
            onClick={(e) => { e.preventDefault(); showToast('Academy settings module loaded', 'info'); }}
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body text-label-md">Settings</span>
          </a>

          <button
            onClick={() => navigate('/login')}
            className="w-full text-left flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined text-error">logout</span>
            <span className="font-body text-label-md">Logout</span>
          </button>
        </nav>

        {/* Chief Administrator Profile */}
        <div className="pt-4 border-t border-outline-variant/30">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold shadow-inner">
              JD
            </div>
            <div className="overflow-hidden">
              <p className="text-label-md font-semibold truncate">Jaydeep Deshmukh</p>
              <p className="text-label-sm text-outline truncate">Chief Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Top App Bar */}
      <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-4 sm:px-8 z-40 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-on-surface-variant hover:text-primary p-1"
            onClick={() => setSidebarOpen(true)}
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <h2 className="font-display text-lg sm:text-headline-sm font-bold text-primary truncate">
            Create New Competition
          </h2>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative group hidden sm:block">
            <input
              className="bg-surface-container-low border-none rounded-full px-5 py-2 text-label-md w-48 lg:w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="Search competitions..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-2 text-outline text-[20px]">
              search
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => showToast('No new notifications')}
              className="text-on-surface-variant hover:text-primary transition-colors p-1 relative rounded-full hover:bg-surface-container"
              title="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button
              onClick={() => showToast('Admin Help Center: Contact support@carnaticserenity.com')}
              className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container"
              title="Help"
            >
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <Link
              to="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary flex items-center gap-1 transition-all"
              title="View Public Site"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              <span className="hidden sm:inline">Public Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-0 md:ml-64 pt-24 pb-36 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
        {/* Intro Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-on-surface mb-4">
            Craft an Experience
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Add competition details and choose how it will appear to participants. Your choices today define the stage for tomorrow's maestros.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Section 1: Basic Information */}
          <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-2xl">info</span>
              <h3 className="font-display text-2xl font-semibold">Basic Information</h3>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Competition Name *
                </label>
                <input
                  value={competitionName}
                  onChange={(e) => setCompetitionName(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  placeholder="e.g., Margazhi Mahotsav 2025"
                  type="text"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Competition Type
                </label>
                <select
                  value={competitionType}
                  onChange={(e) => setCompetitionType(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none cursor-pointer"
                >
                  <option>Singing (Vocal)</option>
                  <option>Instrumental (Veena, Violin, Flute)</option>
                  <option>Percussion (Mridangam, Ghatam)</option>
                  <option>Group Band / Ensemble</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Short Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  placeholder="A brief overview of the competition objectives, traditions, and judging criteria..."
                  rows="3"
                ></textarea>
              </div>

              {/* Banner Image Upload */}
              <div className="col-span-2">
                <label className="block text-label-md font-semibold text-outline mb-4">
                  Banner Image
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                {bannerPreview ? (
                  <div className="relative rounded-xl overflow-hidden border border-outline-variant group">
                    <img
                      src={bannerPreview}
                      alt="Banner Preview"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-white text-on-surface px-4 py-2 rounded-lg font-semibold text-label-sm shadow hover:bg-surface-container transition-all"
                      >
                        Change Image
                      </button>
                      <button
                        type="button"
                        onClick={() => setBannerPreview(null)}
                        className="bg-error text-white px-4 py-2 rounded-lg font-semibold text-label-sm shadow hover:bg-red-700 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className="relative group cursor-pointer border-2 border-dashed border-outline-variant rounded-xl p-10 sm:p-12 text-center hover:bg-primary-container/10 transition-all"
                  >
                    <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-primary transition-colors">
                      add_photo_alternate
                    </span>
                    <p className="text-label-md text-on-surface-variant font-medium">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-label-sm text-outline mt-1">
                      Recommended size: 1200 x 400px (JPG, PNG, WebP)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Swaralaya separator */}
          <div className="swaralaya-separator my-10">
            <div className="swaralaya-line"></div>
            <div className="swaralaya-dot"></div>
            <div className="swaralaya-dot"></div>
            <div className="swaralaya-dot"></div>
            <div className="swaralaya-line"></div>
          </div>

          {/* Section 2: Schedule & Location */}
          <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
              <h3 className="font-display text-2xl font-semibold">Schedule &amp; Location</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Event Date
                </label>
                <input
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  type="date"
                />
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Start Time
                </label>
                <input
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  type="time"
                />
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  End Time
                </label>
                <input
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  type="time"
                />
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Registration Deadline
                </label>
                <input
                  value={regDeadline}
                  onChange={(e) => setRegDeadline(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  type="date"
                />
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Venue Type
                </label>
                <select
                  value={venueType}
                  onChange={(e) => setVenueType(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none cursor-pointer"
                >
                  <option>Online</option>
                  <option>Offline (On-premise)</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Venue / Meeting Link
                </label>
                <input
                  value={venueLink}
                  onChange={(e) => setVenueLink(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  placeholder="Location address or Zoom / Meet link"
                  type="text"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Participation Details */}
          <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-2xl">diversity_3</span>
              <h3 className="font-display text-2xl font-semibold">Participation Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Participation Mode
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setParticipationMode('Solo')}
                    className={`flex-1 flex items-center justify-center p-4 rounded-lg cursor-pointer border-2 transition-all font-medium text-label-md ${
                      participationMode === 'Solo'
                        ? 'border-primary bg-primary-container/20 text-primary font-bold shadow-xs'
                        : 'border-transparent bg-surface-container-low text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined mr-2 text-lg">person</span>
                    Solo
                  </button>
                  <button
                    type="button"
                    onClick={() => setParticipationMode('Group')}
                    className={`flex-1 flex items-center justify-center p-4 rounded-lg cursor-pointer border-2 transition-all font-medium text-label-md ${
                      participationMode === 'Group'
                        ? 'border-primary bg-primary-container/20 text-primary font-bold shadow-xs'
                        : 'border-transparent bg-surface-container-low text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined mr-2 text-lg">groups</span>
                    Group
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Age Group
                </label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none cursor-pointer"
                >
                  <option>Under 10</option>
                  <option>10 - 15</option>
                  <option>15 - 18</option>
                  <option>Open Category</option>
                </select>
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Registration Fee
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-4 font-semibold text-outline">₹</span>
                  <input
                    value={registrationFee}
                    onChange={(e) => setRegistrationFee(e.target.value)}
                    className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 pl-10 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                    placeholder="500"
                    type="number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Max Participants
                </label>
                <input
                  value={maxParticipants}
                  onChange={(e) => setMaxParticipants(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  placeholder="No limit"
                  type="number"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Prize Details
                </label>
                <textarea
                  value={prizeDetails}
                  onChange={(e) => setPrizeDetails(e.target.value)}
                  className="w-full bg-surface-container-low border border-transparent rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none"
                  placeholder="e.g., 1st Prize: ₹5,000 + Golden Tambura Trophy, 2nd Prize: ₹3,000 + Certificate..."
                  rows="2"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Section 4: Google Form Registration Link */}
          <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-sm border border-outline-variant/30">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold">Registration Link (Google Form)</h3>
                  <p className="text-label-sm text-outline">
                    Connect your Google Form for participant registration and responses
                  </p>
                </div>
              </div>
              {googleFormLink ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Link Connected
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-outline border border-outline-variant/40">
                  Not Configured
                </span>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-label-md font-semibold text-outline mb-2">
                  Google Form URL *
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-outline text-xl pointer-events-none">
                    link
                  </span>
                  <input
                    value={googleFormLink}
                    onChange={(e) => setGoogleFormLink(e.target.value)}
                    className="w-full bg-surface-container-low border border-transparent rounded-xl p-4 pl-12 pr-32 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all outline-none text-on-surface"
                    placeholder="https://forms.gle/xyz123 or https://docs.google.com/forms/d/e/.../viewform"
                    type="url"
                  />
                  {googleFormLink && (
                    <div className="absolute right-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => window.open(googleFormLink, '_blank', 'noopener,noreferrer')}
                        className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all shadow-xs"
                        title="Open form in new tab"
                      >
                        <span>Test Link</span>
                        <span className="material-symbols-outlined text-xs">open_in_new</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setGoogleFormLink('')}
                        className="p-1 rounded-lg text-outline hover:text-error hover:bg-error/10 transition-all"
                        title="Clear link"
                      >
                        <span className="material-symbols-outlined text-base">close</span>
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-label-sm text-outline mt-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">info</span>
                  Paste the shareable link from your Google Form (Shortened forms.gle URL or docs.google.com form link).
                </p>
              </div>

              {/* Instructions Helper Card */}
              <div className="bg-surface-container-low/70 rounded-xl p-5 border border-outline-variant/30 flex flex-col sm:flex-row gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-primary-container/60 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">help</span>
                </div>
                <div className="space-y-1.5 text-xs text-on-surface-variant">
                  <span className="font-semibold text-on-surface text-sm block">How to get your Google Form link:</span>
                  <ol className="list-decimal list-inside space-y-1 text-outline">
                    <li>Open your registration form in <span className="text-on-surface font-medium">Google Forms</span></li>
                    <li>Click the <strong className="text-on-surface font-medium">"Send"</strong> button in the top-right corner</li>
                    <li>Switch to the link tab (<strong className="text-on-surface font-medium">🔗</strong>) and optionally check "Shorten URL"</li>
                    <li>Click <strong className="text-on-surface font-medium">"Copy"</strong> and paste the link into the field above</li>
                  </ol>
                </div>
              </div>

              {/* Active Link Status Card */}
              {googleFormLink && (
                <div className="bg-primary-container/20 rounded-xl p-4 border border-primary/20 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">task_alt</span>
                    <div>
                      <p className="text-label-md font-semibold text-on-surface">Google Form Ready</p>
                      <p className="text-xs text-outline truncate max-w-xs sm:max-w-md">{googleFormLink}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(googleFormLink);
                      showToast('Google Form link copied to clipboard!');
                    }}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-all flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">content_copy</span>
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Section 5: Display Template Selection */}
          <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-sm border border-outline-variant/30 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-2xl">palette</span>
              <h3 className="font-display text-2xl font-semibold">Display Template Selection</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {TEMPLATES.map((tmpl) => {
                const isSelected = selectedTemplate === tmpl.id;
                return (
                  <div
                    key={tmpl.id}
                    onClick={() => setSelectedTemplate(tmpl.id)}
                    className="group relative flex flex-col cursor-pointer"
                  >
                    <div
                      className={`aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low mb-3 border-2 transition-all shadow-sm relative ${
                        isSelected ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-outline-variant/40 hover:border-outline'
                      }`}
                    >
                      {tmpl.renderThumbnail()}
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTemplate(tmpl.id);
                            setPreviewModalOpen(true);
                          }}
                          className="bg-white text-primary px-4 py-2 rounded-lg font-semibold text-label-sm shadow-md hover:scale-105 transition-all"
                        >
                          Preview
                        </button>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="template"
                        checked={isSelected}
                        onChange={() => setSelectedTemplate(tmpl.id)}
                        className="text-primary focus:ring-primary border-outline-variant"
                      />
                      <span className={`text-label-md font-semibold ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {tmpl.name}
                      </span>
                    </label>
                    <p className="text-label-sm text-outline mt-1">{tmpl.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 md:left-64 right-0 bg-white/90 glass-header border-t border-outline-variant/30 h-20 flex items-center justify-between px-4 sm:px-8 md:px-12 z-40 shadow-lg">
        <div>
          <span className="text-label-sm text-outline uppercase tracking-widest font-semibold text-[11px] sm:text-xs">
            Autosaved at {autosaveTime}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button
            type="button"
            onClick={handleSaveDraft}
            className="px-4 sm:px-6 py-2 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/5 transition-all text-sm active:scale-95"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => setPreviewModalOpen(true)}
            className="hidden sm:flex items-center gap-2 text-on-surface-variant font-semibold hover:text-primary transition-all text-sm"
          >
            <span className="material-symbols-outlined text-lg">visibility</span>
            Preview
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-primary text-on-primary font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm"
          >
            Publish Competition
          </button>
        </div>
      </footer>

      {/* Absolute Footer Information */}
      <div className="ml-0 md:ml-64 bg-transparent h-12 flex justify-between items-center px-6 md:px-8 w-full border-t border-outline-variant/30 text-xs">
        <span className="text-outline text-label-sm">© 2025 Carnatic Serenity Music Academy</span>
        <div className="flex gap-4 sm:gap-6">
          <a className="text-outline text-label-sm hover:text-primary transition-colors" href="#support">
            Support
          </a>
          <a className="text-outline text-label-sm hover:text-primary transition-colors" href="#privacy">
            Privacy Policy
          </a>
          <a className="text-outline text-label-sm hover:text-primary transition-colors" href="#terms">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Modal: Live Competition Preview */}
      {previewModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-outline-variant/30 flex flex-col">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center sticky top-0 bg-surface z-10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">visibility</span>
                <h3 className="font-display text-xl font-bold">
                  Preview: {TEMPLATES.find((t) => t.id === selectedTemplate)?.name} Template
                </h3>
              </div>
              <button
                onClick={() => setPreviewModalOpen(false)}
                className="p-1 rounded-full hover:bg-surface-container text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Simulated Banner */}
              <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-primary-container relative flex items-center justify-center shadow-inner">
                {bannerPreview ? (
                  <img src={bannerPreview} alt="Banner" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6 text-on-primary-container">
                    <span className="material-symbols-outlined text-5xl mb-2">music_note</span>
                    <h4 className="font-display text-2xl font-bold">
                      {competitionName || 'Margazhi Sangeeta Mahotsav'}
                    </h4>
                    <p className="text-sm opacity-80">{competitionType}</p>
                  </div>
                )}
              </div>

              {/* Details breakdown */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-on-surface">
                      {competitionName || 'Untitled Competition'}
                    </h2>
                    <span className="inline-block bg-secondary-container text-on-secondary-container text-xs font-semibold px-3 py-1 rounded-full mt-2">
                      {competitionType} • {participationMode}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {registrationFee ? `₹${registrationFee}` : 'Free Entry'}
                    </div>
                    <span className="text-xs text-outline">Per Registration</span>
                  </div>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {description || 'Join us in celebrating classical Carnatic musical heritage. Outstanding talents across categories will receive accolades from distinguished vidwans.'}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20 text-sm">
                  <div>
                    <span className="text-outline text-xs block">Event Date</span>
                    <span className="font-semibold">{eventDate || 'TBD'}</span>
                  </div>
                  <div>
                    <span className="text-outline text-xs block">Timing</span>
                    <span className="font-semibold">
                      {startTime || '10:00 AM'} - {endTime || '05:00 PM'}
                    </span>
                  </div>
                  <div>
                    <span className="text-outline text-xs block">Venue</span>
                    <span className="font-semibold">{venueType} ({venueLink || 'Campus Auditorium'})</span>
                  </div>
                  <div>
                    <span className="text-outline text-xs block">Age Category</span>
                    <span className="font-semibold">{ageGroup}</span>
                  </div>
                </div>

                {prizeDetails && (
                  <div className="p-4 bg-tertiary-container/30 rounded-lg border border-tertiary/20">
                    <span className="text-xs font-bold uppercase tracking-wider text-tertiary block mb-1">
                      Prizes &amp; Awards
                    </span>
                    <p className="text-sm font-medium text-on-surface">{prizeDetails}</p>
                  </div>
                )}
              </div>

              {/* Registration Link / Google Form Preview */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <h4 className="font-display text-lg font-semibold">
                      Participant Registration
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                    Google Form
                  </span>
                </div>
                <p className="text-xs text-outline mb-4">
                  Participants will be redirected to the official Google Form to submit their entries.
                </p>
                {googleFormLink ? (
                  <div className="flex items-center justify-between p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/30 flex-wrap gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <span className="material-symbols-outlined text-primary text-sm">link</span>
                      <span className="text-xs font-medium text-on-surface truncate max-w-xs sm:max-w-md">
                        {googleFormLink}
                      </span>
                    </div>
                    <a
                      href={googleFormLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-xs hover:scale-105 transition-all shadow-xs flex items-center gap-1"
                    >
                      <span>Open Google Form</span>
                      <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-surface-container-low text-center border border-dashed border-outline-variant/40">
                    <p className="text-xs text-outline">
                      No Google Form link configured yet. Add a link in Section 4.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-outline-variant/20 flex justify-end gap-4 bg-surface sticky bottom-0">
              <button
                type="button"
                onClick={() => setPreviewModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCompetition;
