walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\btrump\b/g, "cheeto man");
	v = v.replace(/\bTrump\b/g, "Cheeto Man");
	v = v.replace(/\bTRUMP\b/g, "CHEETO MAN");
	
        v = v.replace(/\bDonald Trump\b/g, "Cheeto Man");
        v = v.replace(/\bdonald trump\b/g, "cheeto man");
	v = v.replace(/\bDONALD TRUMP\b/g, "CHEETO MAN");
	
	v = v.replace(/\bDonald J. Trump\b/g, "Cheeto Man");
        v = v.replace(/\bdonald j. trump\b/g, "cheeto man");
	v = v.replace(/\bDONALD J. TRUMP\b/g, "CHEETO MAN");
	
	v = v.replace(/\bDonald J Trump\b/g, "Cheeto Man");
        v = v.replace(/\bdonald j trump\b/g, "cheeto man");
	v = v.replace(/\bDONALD J TRUMP\b/g, "CHEETO MAN");
	
	



	
	textNode.nodeValue = v;
}

