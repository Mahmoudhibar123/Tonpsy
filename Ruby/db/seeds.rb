# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'open-uri'

@data = [
	[
		"Dr Kaouther BEN NETICHA",
		"National diploma of doctor of medicine National diploma of doctor specializing in psychiatry",
		["Psychiatrist"],
		"https://www.med.tn/uploads/doctors/66ce672cfb7c24e22756d8ef038faa0a.jpg?v=20200316193306",
		["Prescription of psychotropic drugs","Individual psychotherapy","Therapy session","PSYCHOTHERAPY"]
	],
	[
		"Dr Asma BENZID HASSEN",
		"Psychiatrist - clinical sexologist - Addictologist - Cognitive and behavioral therapy",
		["Psychiatrist"],
		"https://www.med.tn/uploads/doctors/145fdf34862406ba765d6501968c7b8f.jpg?v=20200316193306",
		["Therapy session","Sex","therapy","Prescription of psychotropic drugs","Psychotherapy TBI","Addiction"]
	],
	[
		"Pr Mohamed GUERMAZI",
		"",
		["Obstetrician Gynecologist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/a0a1e997b76b901f7d9ae03e5ae6205f.jpg?v=20200316193335",
		["Vaginal and hymen plasty","IUD","insertion Follow-up","of pregnancy","Hysteroscopy","Pelvic surgery"]
	],
	[
		"Dr. Mahdi MAALEJ",
		"",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/3aed8f61c44994c358bfc73f525bc493.jpg?v=20200316193335",
		[""]
	],
	[
		"Dr Nourane KRIAA ",
		"Doctor of Medicine diploma from the Faculty of Medicine of Tunis. Degree in Angiology from the Faculty of Medicine of Montpellier. Diploma in Phlebology from the Pierre & Marie Curie Faculty of Medicine, Paris 5.",
		["Angiologue","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/145f06d38ae7595b321ff3b421a94e53.jpg?v=20200316193335",
		["Lymphatic diseases","Endo Venous Laser","Doppler Echo","Varicose","Lasers","Vascular Medicine"]
	],
	[
		"Dr Mehdi AMRI",
		"Doctor of State from the University of Paris 7
		Certificate of Higher Studies in Periodontology Paris 7
		University Diploma in Oral Dermatology Paris 5
		Inter-University Diploma in Implantology Paris 6
		University Diploma in Pre and Peri- Implant Surgery Paris XI
		International Certificate in Periodontology ad Implantology of New-York University",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/offices/188852_dr-mehdi-amri_1581761205.jpg",
		["Ceramic inlay onlay", "White", "fillings", "Ceramic zirconia", "prosthesis Dental devitalization", "Caries treatment"]
	],
	[
		"Dr Rym NSAIBIA",
		"Dental veneers Dental implantology Smile design INSTAGRAM: drrymnsaibia",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/7b1d599ba6bd6bb498ac1e147eb284c3.jpg?v=20200316200453",
		["Dental scaling" ,"Implant plus crown ccm","Fixed and removable prosthetic care", "Composite coronary", "filling Ceramic-ceramic crown"]
	],
	[
		"Dr Khaoula JEBALI",
		"National Diploma of Doctor of Dentistry FMDM Surgery-
		Implantology- aesthetic facets- Dental aesthetics- Dental lightening (whitening) - Zirconia crowns / bridges",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/a351b4e2376dae747a477c0e813f3846.jpg?v=20200316200453",
		["Cosmetic dentistry","Periodontal care (scaling ...)","Surgical extraction","Dental care and caries","Teeth whitening on chair"]
	],
	[
		"Dr Ali BOURGUIBA",
		"Training in oral and periodontal dentistry implantolgie Aesthetic
		Orthodontics invisible
		Laser
		Endodontics mechanized

		Bleaching
		Veneers Ceramic
		Dental",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/offices/13110-dr-ali-bourguiba-1583835996.jpg",
		["Restoration (composite)","Amalgam","filling Dental whitening with","radio","laser","Aesthetic dental care"]
	],
	[
		"Dr Karim YACOUBI",
		"Chirurgien dentiste dentist",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/e2ff4af95137ad7fb6354cd1bb438259.jpg?v=20200316202309",
		["Dental emergency management","Dentosmile orthodontics","Ceramic-ceramic crown","Implant pillar","dental prosthesis care"]
	],
	[
		"Dr Wejden SAADAOUI",
		"Dental esthetics Implantology Interception Orthodontics Aesthetics of the lower floor of the face (PRP and hyaluronic acid)",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/5753c1b07b05f68a8a0962e8fe3180bf.jpg?v=20200316202309",
		["Caries care","Management of patients with orthopedic problems Oral","surgery Oral","prevention Dental","whitening"]
	],
	[
		"Dr Sahar Turki",
		"Obtaining a Doctorate degree in medicine / Faculty of Medicine of Sfax / TUNISIA
		Obtaining a specialty diploma in Neurology
		6 years of professional experience in France: exercise as an intern in neurology then associate practitioner associated within services of general or specialized neurology of French hospitals.
		Obtaining several French university and inter-university diplomas:
		- Specialized medical training diploma in Neurology, issued by Lille 2 University
		- Headache-migraine diploma issued by Lille 2 University
		- Clinical Neurophysiology diploma: EMG-EEG modules issued by l Lille 2 University
		- Diploma in movement pathology: Parkinson's and abnormal movements issued by the University of Paris VI
		- Diploma in diagnostic imaging of the central nervous system issued by the University of Paris VI
		- Diploma in Neurology - internal medicine issued by the University Paris VI
		- Diploma Stroke emergency issued by Paris VI University",
		["Neurologist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/13d7d792c5dfbe264bc78b6b60ca4056.jpg?v=20200316203022",
		[]
	],
	[
		"Dr Hela HALOUI",
		"Specialist in complete prosthesis. Implantology. Occlusodontics. Cosmetic dentistry.",
		["Dentist","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/c4683cced591f57c471b2ea894a73ad3.jpg?v=20200316203618",
		["Oral prevention","Ceramic","dental","veneers","Emergencies","Dental prosthesis on implant","Oral surgery"]
	],
	[
		"Dr Sofiene DABBECHE",
		"lingual orthodontics invisible orthodontics invisalign",
		["Orthodontiste","Psychiatrist"],
		"https://www.med.tn/uploads/doctors/fe06fce74ea305a69a7c7a95da4c5f93.jpg?v=20200316203618",
		["Restraint","Broken arch","Interception treatment","Orthopedics and orthodontics for children","Bracket / metal fasteners"]
	],
	[
		"Dr Amine ABID - WIFEK RADIOLOGY CENTER",
		"Digital-Dental Radiology and Mammography Color Doppler Ultrasound, Interventional Radiology, 3D-4D Fetal, MRI Scanner",
		["Psychiatrist","radiologist"],
		"https://www.med.tn/uploads/doctors/6320dc0c6b983a961e4bbd6c55470dde.jpg?v=20200316203618",
		["Color Doppler","Morphological","ultrasound","Dental","x- ray","Obstetric ultrasound","Biopsy"]
	],
	[
		"Dr Zied CHOUBANI",
		"ANCIEN ASSISTANT HOSPITALO UNIVERSITAIRE A LA FACULTE DE MEDECINE DE TUNIS.
		ANCIEN INTERNE DE LA PITIE -SALPETRIERE PARIS.
		PRATICIEN EMDR",
		["Psychiatrist"],
		"https://www.med.tn/uploads/doctors/29283738f7350032a5f032797879ed8e.jpg?v=20200316205711",
		[]
	],
	[
		"Dr Rabiha CHIHANI",
		"Behavioral and cognitive therapy, interpersonal therapy",
		["Psychiatrist"],
		"https://www.med.tn/uploads/doctors/3a8297cd7ab29c057071209a2424687a.jpg?v=20200316210136",
		["Individual psychotherapy","PSYCHOTHERAPY","Therapy session","Sex","therapy","Couple","psychotherapy"]
	],
	[
		"Dr Khouloud HOUSSANI MAKNI",
		"Psychiatry
		Behavioral and cognitive psychotherapy
		Addictology
		Legal and expert psychiatry

		Doctor of Medicine (Tunisian diploma of the faculty of medicine of TUNIS)
		Specialist in Psychiatry
		Registered in the National Table of the Order of Doctors in Tunisia (Governorate of Tunis)
		Internal for two years in TUNIS hospitals
		Resident in Psychiatry for four years at the Razi psychiatric hospital (Mannouba)
		University degree in legal and expert psychiatry. Faculty of Medicine of TUNIS
		Certificate of Complementary Studies in Addictology of the Faculty of Medicine of TUNIS
		Professional Master in Behavioral and Cognitive Psychotherapy from the Faculty of Medicine of SOUSSE.
		Graduated from Amideast in Medical English.",
		["Psychiatrist"],
		"https://www.med.tn/uploads/doctors/19847374fc48a6bd4e6ffab70fb77381.jpg?v=20200316210136",
		[]
	],
	[
		"Dr Chiraz HASSEN",
		"BOTOX injections, hyaluronic acid, mesotherapy and PRP nasal endoscopy, nasofibroscopy audiometry, impedancemetry",
		["Otorhinolaryngologist (ENT)","Psychiatrist"],
		"https://www.med.tn/uploads/offices/187600-dr-chiraz-hassen-1583017838.jpg",
		["SNORING","Cervical lymphadenopathy","Endoscopy","Audiometry child and adult","Surgical procedures"]
	],
	[
		"Dr Ikram LOUATI",
		"Pediatric dermatology Perinatalitis Endocrino and pediatric diabetes",
		["Pediatrician","Psychiatrist"],
		"https://www.med.tn/uploads/offices/20438-dr-ikram-louati-1583613481.jpg",
		["Examination of a newborn in the clinic","Child and adolescent obesity","Vaccines for children","consultatuion"]
	]

]


@data.each do |data|
	puts "name",data[0].inspect
	puts "title",data[1].inspect
	puts "degree",data[2].inspect
	puts "image url ",data[3].inspect
	puts "4 box wala data",data[4].inspect


  image = open(data[3])
  @doctor = Doctor.new(name: data[0], description: data[1])
  if @doctor.save
    @doctor.avatar.attach(io: image, filename: 'doctor.jpg')
    if data[4]
      data[4].each do |content|
        puts"ssssssssssssssssssssssssssssssssssss"
        Treatment.create(doctor_id: @doctor.id, name: content)
      end
    end
  end
end


