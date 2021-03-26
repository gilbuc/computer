import json


def json2js(jsonfilepath):
    jsJson = []
    print("== start ==")
    # load bookmark json
    with open(jsonfilepath,'r') as jsonfile:
        data = json.load(jsonfile)
        
    # parse and create the new jsJson-Format for data
    for entry in data['children']:
        print ('add Toolbox:['+entry['title']+"]")
        e = {'title':entry['title']}
        atb = []
        childs = entry.get('children')
        if childs:
            for block in childs:
                print ('... add Block:['+block['title']+"]")
                tb = {'title' : block['title']}
                tb['entries']=[]
                tbEntries = block.get('children')
                if tbEntries:
                    for tbEntry in tbEntries:
                        if tbEntry.get('uri'):
                            tbEntryNew = {'title' : tbEntry['title'], 'url' : tbEntry['uri']}
                            tb['entries'].append(tbEntryNew)
                atb.append(tb)
        e['toolblocks'] = atb
        jsJson.append(e)
    print("== finished ==")

    # write transformed javascript file
    with open(jsonfilepath+'.js', 'w') as jsfile:
        jsfile.write('function getData(){return ')
        jsfile.write(json.dumps(jsJson))
        jsfile.write(';}')

if __name__ == '__main__':
    from sys import argv
    l = len(argv)
    if l == 2:
        json2js(argv[1])
    else:
        raise ValueError('Usage: python bookmark2data.py bookmarkFilename')