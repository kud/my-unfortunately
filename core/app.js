var shell = require('shelljs')
var h     = require('./helper')

function chocoInstall( app ) {
  shell.exec('choco install ' + app + ' -y')
  shell.exec('choco upgrade ' + app + ' -y')
}

h.echoTitle('Installing app...')

chocoInstall('nodejs.install')
chocoInstall('git.install')
chocoInstall('make')
chocoInstall('python')
chocoInstall('ccleaner')
chocoInstall('7zip.install')
chocoInstall('sumatrapdf.install')
chocoInstall('mactype')
chocoInstall('f.lux')
chocoInstall('launchy-beta')
chocoInstall('clamwin')
chocoInstall('keepass')
chocoInstall('pdfcreator')
chocoInstall('virtuawin')
chocoInstall('exiftool')
/*chocoInstall('sublimetext3')*/
chocoInstall('deluge')
chocoInstall('ultradefrag')
chocoInstall('FileOptimizer')

chocoInstall('spotify')
chocoInstall('filebot')
chocoInstall('vlc-nightly')

chocoInstall('steam')
chocoInstall('origin')
/*chocoInstall('battle.net')*/

h.echoSuccess('App installed!')
