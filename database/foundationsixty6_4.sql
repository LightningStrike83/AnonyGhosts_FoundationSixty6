-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 03, 2024 at 08:22 PM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: foundationsixty6_4
--

-- --------------------------------------------------------

--
-- Table structure for table authors
--

CREATE TABLE authors (
  id int(10) UNSIGNED NOT NULL,
  name varchar(500) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table authors
--

INSERT INTO authors (id, name, created_at, updated_at) VALUES
(1, 'Sophia Westrop', '2024-04-02 04:44:09', '2024-04-02 04:44:09'),
(2, 'Welt Yang', '2024-04-02 04:44:09', '2024-04-02 04:44:09'),
(3, 'Stuart Du Camp', '2024-04-02 04:44:09', '2024-04-02 04:44:09');

-- --------------------------------------------------------

--
-- Table structure for table blog_posts
--

CREATE TABLE blog_posts (
  id int(10) UNSIGNED NOT NULL,
  title varchar(100) NOT NULL,
  description varchar(500) NOT NULL,
  author int(10) UNSIGNED DEFAULT NULL,
  text varchar(5000) NOT NULL,
  date date NOT NULL,
  image_filename varchar(100) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table blog_posts
--

INSERT INTO blog_posts (id, title, description, author, text, date, image_filename, created_at, updated_at) VALUES
(3, 'Understanding Bipolar Disorder', 'An in-depth look at how a youth can experience bipolar disorder.', 3, 'Bipolar disorder is a complex mental health condition that affects millions of individuals worldwide. While it often carries a stigma, it\'s essential to understand that bipolar disorder is not simply a matter of mood swings but rather a nuanced spectrum of experiences that shape individuals in unique ways.<br><br>\r\n\r\n\r\nAt its core, bipolar disorder involves fluctuations in mood, energy, and activity levels. These shifts can vary widely, from manic episodes characterized by heightened euphoria, increased energy, and impulsive behavior, to depressive episodes marked by sadness, low energy, and feelings of hopelessness. However, it\'s crucial to recognize that not all individuals experience bipolar disorder in the same way.<br><br>\r\n\r\n\r\nOne of the key aspects of bipolar disorder is its spectrum nature. Some individuals may predominantly experience manic episodes, while others may primarily face depressive episodes. Additionally, there are those who experience a mix of both simultaneously, known as a mixed state. This variability underscores the importance of recognizing the diverse manifestations of bipolar disorder and the need for personalized approaches to treatment and support.<br><br>\r\n\r\n\r\nUnderstanding bipolar disorder goes beyond recognizing its symptoms; it involves acknowledging the strengths and resilience of individuals living with this condition. Many people with bipolar disorder possess unique talents, creativity, and insight that are often heightened during manic phases. These moments of elevated mood can fuel artistic endeavors, innovative thinking, and profound expressions of emotion.<br><br>\r\n\r\n\r\nFurthermore, the journey of living with bipolar disorder often fosters tremendous growth and self-awareness. Through therapy, medication, and support networks, individuals learn to navigate the complexities of their emotions, cultivate coping strategies, and embrace a sense of empowerment over their mental health.<br><br>\r\n\r\n\r\nIt\'s also important to emphasize that seeking help and treatment for bipolar disorder is not a sign of weakness but rather an act of courage and self-care. With proper support, individuals can effectively manage their symptoms, pursue their goals, and lead fulfilling lives.<br><br>\r\n\r\n\r\nAs a society, we must foster a culture of understanding and compassion surrounding mental health conditions like bipolar disorder. By dispelling myths, challenging stereotypes, and promoting open dialogue, we can create environments where individuals feel safe to seek help and find acceptance without judgment.<br><br>\r\n\r\n\r\nUltimately, embracing the spectrum of human experience includes recognizing the multifaceted nature of mental health conditions like bipolar disorder. By acknowledging the strengths, challenges, and resilience of individuals living with bipolar disorder, we move towards a more inclusive and supportive society where everyone can thrive.', '2024-04-18', 'images/drawings/bipolar-plant.png', '2024-04-02 04:43:15', '2024-04-02 04:43:15'),
(4, 'Understanding Psychotic Depression', 'An in-depth look at how a youth can experience psychotic depression.', 3, 'Psychotic depression is a unique form of depression that combines the symptoms of severe depression with psychosis, a detachment from reality characterized by delusions and hallucinations. While the term may sound intimidating, it\'s essential to approach the topic with understanding and empathy, recognizing that individuals living with psychotic depression are navigating complex challenges that require support and compassion.<br><br>\r\n\r\nAt its core, psychotic depression shares many features with major depressive disorder, including profound sadness, loss of interest in activities, changes in appetite and sleep patterns, and feelings of worthlessness or guilt. However, what sets psychotic depression apart is the presence of psychotic symptoms, such as delusions (false beliefs) and hallucinations (perceiving things that aren\'t there).<br><br>\r\n\r\n\r\nDelusions in psychotic depression often revolve around themes of guilt, personal inadequacy, or persecution. Individuals may believe they are responsible for terrible events, that they are unworthy of love or happiness, or that they are being targeted by unseen forces. These beliefs can be distressing and contribute to a sense of isolation and despair.<br><br>\r\n\r\n\r\nHallucinations in psychotic depression can involve seeing, hearing, or even feeling things that others do not. These experiences may further exacerbate feelings of confusion and disconnect from reality, making it challenging for individuals to discern what is real and what is not.<br><br>\r\n\r\n\r\nIt\'s important to emphasize that psychotic depression is a treatable condition. With the right combination of therapy, medication, and support, individuals can effectively manage their symptoms and regain stability in their lives. Therapy, particularly cognitive-behavioral therapy (CBT) and supportive therapy, can help individuals challenge negative thought patterns, develop coping strategies, and rebuild a sense of self-worth.<br><br>\r\n\r\n\r\nMedication, including antidepressants and antipsychotic medications, can help alleviate symptoms and restore balance to brain chemistry. It\'s essential for individuals with psychotic depression to work closely with mental health professionals to find the most effective treatment plan tailored to their needs.<br><br>\r\n\r\n\r\nSupport from friends, family, and support groups also plays a crucial role in the recovery journey. Creating a safe and understanding environment where individuals feel heard, validated, and accepted can make a world of difference in their healing process.\r\nEducating ourselves and others about psychotic depression is key to fostering empathy and reducing stigma surrounding mental health conditions. By learning about the challenges faced by individuals with psychotic depression and offering support without judgment, we can contribute to a more compassionate and inclusive society.<br><br>\r\n\r\n\r\nIn conclusion, while psychotic depression presents unique challenges, it\'s important to approach the topic with empathy and understanding. With access to proper treatment, support, and a supportive community, individuals living with psychotic depression can find hope, healing, and a path towards recovery. Let\'s work together to create a world where everyone feels valued, understood, and supported on their journey towards mental wellness.', '2024-04-18', 'images/drawings/psychotic-depression-plant.png', '2024-04-02 04:43:15', '2024-04-02 04:43:15'),
(5, 'Understanding Schizophrenia', 'An in-depth look at how a youth can experience schizophrenia.', 3, 'Schizophrenia is a complex and often misunderstood mental health disorder that affects how a person thinks, feels, and behaves. While media portrayals may perpetuate misconceptions, it\'s essential to approach the topic with empathy and education, recognizing the humanity and resilience of individuals living with schizophrenia.<br><br>\r\n\r\n\r\nAt its core, schizophrenia is characterized by a combination of symptoms, including hallucinations, delusions, disorganized thinking, and impaired social functioning. These symptoms can vary widely in severity and impact, leading to significant challenges in daily life.<br><br>\r\n\r\n\r\nHallucinations, such as hearing voices or seeing things that aren\'t there, are a hallmark feature of schizophrenia. These sensory experiences can feel vivid and real to the individual, often causing distress and confusion. Delusions, which are false beliefs not based on reality, may involve themes of paranoia, grandiosity, or persecution, further complicating the individual\'s perception of the world.\r\nDisorganized thinking and speech patterns can make it difficult for individuals with schizophrenia to communicate coherently or make logical connections between thoughts. This symptom often manifests in tangential or fragmented speech, making it challenging for others to understand their train of thought.<br><br>\r\n\r\n\r\nDespite these challenges, it\'s important to recognize that individuals living with schizophrenia are not defined by their symptoms. They are multifaceted individuals with unique strengths, talents, and aspirations. With the right support and treatment, many individuals with schizophrenia can lead fulfilling and meaningful lives.<br><br>\r\n\r\n\r\nTreatment for schizophrenia typically involves a combination of medication, therapy, and support services. Antipsychotic medications help alleviate symptoms by targeting neurotransmitters in the brain associated with psychosis. Therapy, such as cognitive-behavioral therapy (CBT) and supportive therapy, can help individuals manage symptoms, improve coping skills, and enhance overall quality of life.<br><br>\r\n\r\n\r\nSupport from loved ones, mental health professionals, and peer support groups is also invaluable on the journey towards recovery. Creating a supportive and understanding environment where individuals feel accepted and valued can foster hope and resilience in the face of schizophrenia\'s challenges.\r\n\r\nEducation and awareness play a crucial role in combating stigma and promoting understanding of schizophrenia. By challenging misconceptions and fostering empathy, we can create communities where individuals living with schizophrenia feel empowered to seek help and pursue their goals without fear of judgment.<br><br>\r\n\r\n\r\nIn conclusion, schizophrenia is a complex mental health disorder that requires compassion, understanding, and support. By embracing the humanity and resilience of individuals living with schizophrenia, we can work towards a more inclusive and supportive society where everyone has the opportunity to thrive. Let\'s come together to break down barriers, promote mental wellness, and build a world where everyone feels accepted and supported on their journey towards healing.', '2024-04-18', 'images/drawings/schizophrenia-plant.png', '2024-04-02 04:43:15', '2024-04-02 04:43:15');

-- --------------------------------------------------------

--
-- Table structure for table blog_posts_media
--

CREATE TABLE blog_posts_media (
  id int(10) UNSIGNED NOT NULL,
  img_filename varchar(30) NOT NULL,
  blog_post_id int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table blog_posts_media
--

INSERT INTO blog_posts_media (id, img_filename, blog_post_id) VALUES
(3, 'bipolar-plant.png', 3);

-- --------------------------------------------------------

--
-- Table structure for table careers
--

CREATE TABLE careers (
  id int(10) UNSIGNED NOT NULL,
  reference varchar(20) NOT NULL,
  title varchar(20) NOT NULL,
  description varchar(30) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table careers
--

INSERT INTO careers (id, reference, title, description, created_at, updated_at) VALUES
(1, 'C25', 'Receptionist', 'Looking for a Receptionist', '2024-04-02 04:47:48', '2024-04-02 04:47:48'),
(2, 'C12', 'Counsellor', 'Looking for a Counsellor', '2024-04-02 04:47:48', '2024-04-02 04:47:48');

-- --------------------------------------------------------

--
-- Table structure for table contacts
--

CREATE TABLE contacts (
  id int(11) NOT NULL,
  full_name varchar(60) NOT NULL,
  email varchar(40) NOT NULL,
  subject varchar(40) NOT NULL,
  message varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table contacts
--

INSERT INTO contacts (id, full_name, email, subject, message) VALUES
(1, 'Ana Smith', 'ana.smith@gmail.com', 'Congratulations!', 'I\'m really happy for you guys!'),
(2, 'Jacob Hunter', 'jacob@gmail.com', 'Awesome Foundation!', 'I\'m really exciting of hearing about this foundation how can I get more information? Thank you'),
(3, 'Scott Print', 'scott@gmail.com', 'I need Help', 'I want to connect with a professional, please I need help.');

-- --------------------------------------------------------

--
-- Table structure for table events
--

CREATE TABLE `events` (
  id int(11) NOT NULL,
  date varchar(200) NOT NULL,
  time varchar(50) NOT NULL,
  title varchar(50) NOT NULL,
  place varchar(50) NOT NULL,
  description varchar(500) NOT NULL,
  image_filename varchar(100) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table events
--

INSERT INTO events (id, date, time, title, place, description, image_filename, created_at, updated_at) VALUES
(1, 'May 1st, 2024', '7:00 pm', 'THANK YOU FANSHAWE DINNER', 'RBC Place', 'A thank you dinner for the Fanshawe students for their diligent work in kickstarting our foundation!', 'clinking-glasses.jpg', '2024-04-02 04:49:12', '2024-04-02 04:49:12'),
(2, 'April 18th, 2024', '1:00 pm', 'IDP INDUSTRY NIGHT', 'Centennial Hall', 'We will be attending Fanshawe College\'s Industry Night to select the group of students whose design we will use.', 'night.jpg', '2024-04-02 04:49:12', '2024-04-02 04:49:12'),
(3, 'April 5th, 2024', '12:00pm', 'IDP Presentations', 'Fanshawe College Downtown Campus', 'Fanshawe College\'s IDP program will be presenting their final ideas and marketing pitches to us, as well as other Industry professionals.', 'presentation.jpg', '2024-04-02 04:49:12', '2024-04-02 04:49:12');

-- --------------------------------------------------------

--
-- Table structure for table mental_health_conditions
--

CREATE TABLE mental_health_conditions (
  id int(11) NOT NULL,
  name varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table partners
--

CREATE TABLE partners (
  id int(10) UNSIGNED NOT NULL,
  name varchar(100) NOT NULL,
  image_url varchar(100) NOT NULL,
  page_url varchar(200) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table partners
--

INSERT INTO partners (id, name, image_url, page_url, created_at, updated_at) VALUES
(1, 'Fanshawe College', 'fanshawe-logo.svg', 'https://www.fanshawec.ca/', '2024-04-02 04:51:05', '2024-04-02 04:51:05'),
(2, 'Blue Sunflower Corporation', 'sunflower.jpg', 'https://bluesunflowercorp.ca/', '2024-04-02 04:51:05', '2024-04-02 04:51:05'),
(3, 'Goodlife Fitness', 'goodlife-logo.svg', 'https://www.goodlifefitness.com/', '2024-04-02 04:51:05', '2024-04-02 04:51:05');

-- --------------------------------------------------------

--
-- Table structure for table volunteers
--

CREATE TABLE volunteers (
  id int(11) NOT NULL,
  reference varchar(20) NOT NULL,
  title varchar(20) NOT NULL,
  description varchar(30) NOT NULL,
  location varchar(300) NOT NULL,
  date varchar(100) NOT NULL,
  time varchar(50) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table volunteers
--

INSERT INTO volunteers (id, reference, title, description, location, date, time, created_at, updated_at) VALUES
(1, 'V10', 'Movie Night Usher', 'Looking for a volunteer ', 'SilverCity Cinema, Masonville Mall', 'July 19, 2024', '7:00 pm', '2024-04-02 04:51:32', '2024-04-02 04:51:32'),
(2, 'V7', 'Jenga Tagger', 'Looking for a volunteer ', 'Victoria Park', 'June 1st, 2024', '9:00 am', '2024-04-02 04:51:32', '2024-04-02 04:51:32'),
(3, 'V3', 'Caterer', 'Looking for a volunteer ', 'RBC Place', 'May 1st, 2024', '7:00 pm', '2024-04-02 04:51:32', '2024-04-02 04:51:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table authors
--
ALTER TABLE authors
  ADD PRIMARY KEY (id);

--
-- Indexes for table blog_posts
--
ALTER TABLE blog_posts
  ADD PRIMARY KEY (id),
  ADD KEY author (author);

--
-- Indexes for table blog_posts_media
--
ALTER TABLE blog_posts_media
  ADD PRIMARY KEY (id),
  ADD KEY blog_post_id (blog_post_id);

--
-- Indexes for table careers
--
ALTER TABLE careers
  ADD PRIMARY KEY (id);

--
-- Indexes for table contacts
--
ALTER TABLE contacts
  ADD PRIMARY KEY (id);

--
-- Indexes for table events
--
ALTER TABLE events
  ADD PRIMARY KEY (id);

--
-- Indexes for table mental_health_conditions
--
ALTER TABLE mental_health_conditions
  ADD PRIMARY KEY (id);

--
-- Indexes for table partners
--
ALTER TABLE partners
  ADD PRIMARY KEY (id);

--
-- Indexes for table volunteers
--
ALTER TABLE volunteers
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table authors
--
ALTER TABLE authors
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table blog_posts
--
ALTER TABLE blog_posts
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table careers
--
ALTER TABLE careers
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table contacts
--
ALTER TABLE contacts
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table events
--
ALTER TABLE events
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table mental_health_conditions
--
ALTER TABLE mental_health_conditions
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table partners
--
ALTER TABLE partners
  MODIFY id int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table volunteers
--
ALTER TABLE volunteers
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table blog_posts
--
ALTER TABLE blog_posts
  ADD CONSTRAINT author FOREIGN KEY (author) REFERENCES authors (id);

--
-- Constraints for table blog_posts_media
--
ALTER TABLE blog_posts_media
  ADD CONSTRAINT media FOREIGN KEY (blog_post_id) REFERENCES blog_posts (id);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
