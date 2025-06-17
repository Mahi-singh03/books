"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiBook, FiSearch, FiUser, FiPlus, FiTrendingUp } from 'react-icons/fi';

export default function Home() {
  const [booksCount, setBooksCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setBooksCount(1243);
      setUsersCount(542);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { name: 'Total Books', value: booksCount, icon: FiBook },
    { name: 'Registered Users', value: usersCount, icon: FiUser },
    { name: 'New This Month', value: 42, icon: FiTrendingUp },
  ];

  const features = [
    {
      name: 'Easy Book Management',
      description: 'Add, edit, and organize your book collection with ease.',
      icon: FiPlus,
    },
    {
      name: 'Advanced Search',
      description: 'Find any book in your collection with powerful search tools.',
      icon: FiSearch,
    },
    {
      name: 'User Management',
      description: 'Manage users and track borrowed books efficiently.',
      icon: FiUser,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>BookMaster - Your Book Management System</title>
        <meta name="description" content="Manage your book collection with ease" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FiBook className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BookMaster</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
             <span className="text-indigo-600">Book Collection</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
          >
            The ultimate solution for managing your personal or library book collection with ease.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-3"
          >
            <input
              type="text"
              placeholder="Search books..."
              className="px-4 py-3 w-full sm:w-96 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center">
              <FiSearch className="mr-2" /> Search
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.name}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {typeof stat.value === 'number' ? (
                            <CountUp end={stat.value} duration={1.5} />
                          ) : (
                            stat.value
                          )}
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Everything you need to manage your book collection effectively
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="pt-6"
                >
                  <div className="flow-root bg-white px-6 pb-8 rounded-lg shadow h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 bg-indigo-700 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block">Start managing your books today.</span>
                </h2>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center">
                <div className="inline-flex rounded-md shadow">
                  <button className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} BookMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Simple count-up animation component
function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}