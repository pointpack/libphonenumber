#!/bin/bash

CWD=`pwd`

GIT_GOOGLE_LIBRARIES=("closure-library" "closure-compiler")

SVN_LIBRARIES=("closure-linter" "python-gflags")

echo "* * * * * * * * * * * * * * * * * * * * * * * * *"
echo "*                LibPhoneNumber                 *"
echo "* * * * * * * * * * * * * * * * * * * * * * * * *"

# create vendor directory if does not exists
if [ ! -d "vendor" ]; then
	mkdir vendor
fi

# clone or update google libraries from github repository
for LIBRARY in "${GIT_GOOGLE_LIBRARIES[@]}"
do
	if [ ! -d "vendor/$LIBRARY" ]; then
		git clone https://github.com/google/$LIBRARY.git vendor/$LIBRARY
	else
		echo "Updating 'vendor/$LIBRARY'..."
		cd vendor/$LIBRARY
		git pull
		cd ../..
	fi
done

# checkout or update google libraries from googlecode repository
for LIBRARY in "${SVN_LIBRARIES[@]}"
do
	if [ ! -d "vendor/$LIBRARY" ]; then
		echo "Checkout into 'vendor/$LIBRARY':"
		svn checkout http://$LIBRARY.googlecode.com/svn/trunk/ vendor/$LIBRARY
	else
		svn update vendor/$LIBRARY
	fi
done

# clone or update libphonenumber from github repository
if [ ! -d "vendor/libphonenumber" ]; then
	git clone https://github.com/googlei18n/libphonenumber.git vendor/libphonenumber
else
	echo "Updating 'vendor/libphonenumber'..."
	cd vendor/libphonenumber
	git pull
	cd ../..
fi

# build closure-compiler
echo "Building closure-compiler..."
ant -f vendor/closure-compiler/build.xml

# create build directory if does not exists
if [ ! -d "build" ]; then
	mkdir build
fi

# build libphonenumber
echo "Building libphonenumber..."
ant -f build.xml compile-libphonenumber